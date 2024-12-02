"use client"

import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import {
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "./Loader";
import ActiveCollaborators from "./ActiveCollaborators";
const CollaborativeRoom = () => {
  return (
    <div>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback="we finishing cooking in just a sec!!">
          <div className="collaborative-room">
            <Header className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">Share</p>
              <div className="flex flex-1 w-full justify-end gap-2 sm:gap-3">
                <ActiveCollaborators />
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>

              </div>
            </Header>
            <Editor />
          </div>
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  )
}

export default CollaborativeRoom;
