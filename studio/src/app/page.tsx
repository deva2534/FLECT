"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Siren, Waves, Wind } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const GoogleIcon = () => (
    <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
      <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 109.8 512 0 402.2 0 256S109.8 0 244 0c86.6 0 160.2 43.6 201.2 113.3l-67.8 52.9C343.3 118.4 298.6 96 244 96c-82.6 0-149.3 67.1-149.3 150s66.7 150 149.3 150c95.8 0 128.9-63.5 133.5-95.2H244v-64.2h236.1c2.3 12.7 3.9 26.9 3.9 41.4z"></path>
    </svg>
  );

export default function LandingPage() {
  const { signInWithGoogle, loading } = useAuth();
  
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="hidden bg-sidebar lg:flex flex-col justify-center items-center p-12 text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 text-primary">
            <Siren className="h-12 w-12" />
        </div>
        <h1 className="text-6xl font-headline font-bold text-primary">FLECT</h1>
        <p className="mt-4 text-2xl font-semibold text-foreground max-w-md">
            In Latin, FLECT means 'to bend'. <br /> Our goal: To bend disaster impact away from people and communities.
        </p>
        <p className="mt-4 text-muted-foreground max-w-lg">
            (Addressing Floods, Landslides, Earthquakes, Cyclones & Tsunamis)
        </p>
        <p className="mt-20 text-lg font-medium italic text-muted-foreground/80 max-w-sm">
            &quot;Your code could save lives. Join us in building disaster resilience.&quot;
        </p>
         <div className="absolute -bottom-16 -right-16 text-primary/5 opacity-30">
            <Wind size={200} strokeWidth={1} />
        </div>
         <div className="absolute -bottom-16 -left-16 text-primary/5 opacity-30">
            <Waves size={200} strokeWidth={1} />
        </div>
      </div>
      <div className="flex items-center justify-center py-12 min-h-screen bg-background">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center lg:hidden">
            <Siren className="h-10 w-10 text-primary mx-auto" />
            <h1 className="text-3xl font-bold font-headline">FLECT</h1>
            <p className="text-balance text-muted-foreground">
              Sign in or create an account to continue
            </p>
          </div>
           <Card>
            <CardHeader>
                <CardTitle>Get Started</CardTitle>
                <CardDescription>Enter your details or use a provider.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Button variant="outline" className="w-full" onClick={signInWithGoogle} disabled={loading}>
                    <GoogleIcon />
                    Sign in with Google
                </Button>
                 <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button type="submit" className="w-full" asChild>
                        <Link href="/dashboard">Sign In</Link>
                    </Button>
                     <Button type="submit" variant="secondary" className="w-full" asChild>
                        <Link href="/dashboard">Sign Up</Link>
                    </Button>
                </div>
                 <p className="px-8 text-center text-xs text-muted-foreground">
                    Secure login powered by Google OAuth.
                </p>
            </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
