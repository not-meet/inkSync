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
const CollaborativeRoom = () => {
  return (
    <div>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<Loader />}>
          <div className="collaborative-room">
            <Header className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">this is a fake doccument title</p>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Header>
            <Editor />
          </div>
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  )
}

export default CollaborativeRoom;
