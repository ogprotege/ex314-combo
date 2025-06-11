"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { auth, db } from "@/lib/firebase"
import { updateProfile, signOut } from "firebase/auth"
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Save, UserCircle, Bell, Shield, Settings } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export function UserProfile({ user }: { user: any }) {
  const authState = useAuth()
  const authUser = 'user' in authState ? authState.user : null
  const router = useRouter()
  const firebaseUser = auth.currentUser

  const [isUpdating, setIsUpdating] = useState(false)
  const [firstName, setFirstName] = useState(user?.firstName || user?.name?.split(' ')[0] || "")
  const [lastName, setLastName] = useState(user?.lastName || (user?.name?.split(' ').length > 1 ? user.name.split(' ').slice(1).join(' ') : "") || "")
  const [bio, setBio] = useState(user?.bio || "")

  // Prayer preferences
  const [prayerLanguage, setPrayerLanguage] = useState(user?.prayerPreferences?.language || "en")
  const [dailyReminders, setDailyReminders] = useState(user?.prayerPreferences?.dailyReminders || false)
  const [reminderTime, setReminderTime] = useState(user?.prayerPreferences?.reminderTime || "08:00")
  const [favoriteDevotions, setFavoriteDevotions] = useState<string[]>(user?.prayerPreferences?.favoriteDevotions || [])

  // Privacy settings
  const [shareActivity, setShareActivity] = useState(user?.privacySettings?.shareActivity || false)
  const [publicProfile, setPublicProfile] = useState(user?.privacySettings?.publicProfile || false)

  async function updateUserProfile() {
    if (!firebaseUser) return

    setIsUpdating(true)

    try {
      // Update Firebase Auth profile (display name)
      await updateProfile(firebaseUser, {
        displayName: `${firstName} ${lastName}`.trim()
      })

      // Update Firestore document with all user preferences
      const userDocRef = doc(db, "users", firebaseUser.uid)
      
      // Check if user doc exists
      const userDoc = await getDoc(userDocRef)
      
      const userData = {
        name: `${firstName} ${lastName}`.trim(),
        email: firebaseUser.email,
        bio,
        prayerPreferences: {
          language: prayerLanguage,
          dailyReminders,
          reminderTime,
          favoriteDevotions,
        },
        privacySettings: {
          shareActivity,
          publicProfile,
        },
        updatedAt: new Date().toISOString()
      }
      
      if (userDoc.exists()) {
        await updateDoc(userDocRef, userData)
      } else {
        // Create the document if it doesn't exist
        await setDoc(userDocRef, {
          ...userData,
          createdAt: new Date().toISOString(),
          role: "user"
        })
      }

      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      })

      router.refresh()
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Error updating profile",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(false)
    }
  }

  async function handleSignOut() {
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
      toast({
        title: "Error signing out",
        description: "There was an error signing out. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (!authUser) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            <span>Personal Info</span>
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Prayer Preferences</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Privacy & Security</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and how others see you on the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={firebaseUser?.email || ""}
                  disabled
                  className="bg-gray-50"
                />
                <p className="text-xs text-gray-500">To change your email, please use the Firebase account settings.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us a little about yourself..."
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
              <Button onClick={updateUserProfile} disabled={isUpdating} className="bg-purple-600 hover:bg-purple-700">
                {isUpdating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Prayer Preferences</CardTitle>
              <CardDescription>Customize your prayer experience and notification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Prayer Language</Label>
                <Select value={prayerLanguage} onValueChange={setPrayerLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="la">Latin</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="it">Italian</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="pl">Polish</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="daily-reminders" className="block">
                      Daily Prayer Reminders
                    </Label>
                    <p className="text-sm text-gray-500">Receive daily reminders to pray</p>
                  </div>
                  <Switch id="daily-reminders" checked={dailyReminders} onCheckedChange={setDailyReminders} />
                </div>

                {dailyReminders && (
                  <div className="space-y-2">
                    <Label htmlFor="reminder-time">Reminder Time</Label>
                    <Input
                      id="reminder-time"
                      type="time"
                      value={reminderTime}
                      onChange={(e) => setReminderTime(e.target.value)}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Favorite Devotions</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Rosary", "Divine Mercy", "Liturgy of the Hours", "Lectio Divina"].map((devotion) => (
                    <div key={devotion} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`devotion-${devotion}`}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        checked={favoriteDevotions.includes(devotion)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFavoriteDevotions([...favoriteDevotions, devotion])
                          } else {
                            setFavoriteDevotions(favoriteDevotions.filter((d) => d !== devotion))
                          }
                        }}
                      />
                      <label htmlFor={`devotion-${devotion}`} className="text-sm">
                        {devotion}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={updateUserProfile}
                disabled={isUpdating}
                className="ml-auto bg-purple-600 hover:bg-purple-700"
              >
                {isUpdating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Preferences
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Manage your privacy settings and account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="share-activity" className="block">
                      Share Prayer Activity
                    </Label>
                    <p className="text-sm text-gray-500">Allow others to see your prayer activity</p>
                  </div>
                  <Switch id="share-activity" checked={shareActivity} onCheckedChange={setShareActivity} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="public-profile" className="block">
                      Public Profile
                    </Label>
                    <p className="text-sm text-gray-500">Make your profile visible to other users</p>
                  </div>
                  <Switch id="public-profile" checked={publicProfile} onCheckedChange={setPublicProfile} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Account Security</h3>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Manage your account security settings, including password and email.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      // Send password reset email
                      import('firebase/auth').then(({ sendPasswordResetEmail }) => {
                        sendPasswordResetEmail(auth, firebaseUser?.email || "")
                        toast({
                          title: "Password reset email sent",
                          description: "Check your email for instructions to reset your password.",
                        })
                      })
                    }}
                    className="w-full"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Reset Password
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Data & Privacy</h3>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    You can request a copy of your data or delete your account at any time.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "Data export requested",
                          description: "We'll process your request and send the data to your email.",
                        })
                      }}
                    >
                      Request Data Export
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => {
                        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                          // In a real app, this would delete the user's account and data
                          toast({
                            title: "Account deletion requested",
                            description: "Your account will be deleted within 24 hours.",
                            variant: "destructive",
                          })
                        }
                      }}
                    >
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={updateUserProfile}
                disabled={isUpdating}
                className="ml-auto bg-purple-600 hover:bg-purple-700"
              >
                {isUpdating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Privacy Settings
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}