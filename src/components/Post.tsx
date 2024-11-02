"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { FaRegComment, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

import { PiShareFatThin } from "react-icons/pi";

export default function Post() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card radius="md" shadow="lg" className="min-h-60">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-md font-semibold leading-none text-default-600">
              Zoey Lang
            </h4>
            <h5 className="text-sm tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
          perspiciatis dignissimos repudiandae placeat soluta commodi delectus
          suscipit. Alias dolores similique optio ratione, minus doloribus
          asperiores ipsum. Minima qui excepturi iusto!
        </p>
      </CardBody>

      <CardFooter className="gap-3">
        <div className="flex w-full">
          <Button
            radius="sm"
            fullWidth={true}
            variant="light"
            startContent={<FaRegThumbsUp className="text-xl" />}
          >
            Like
          </Button>
          <Button
            radius="sm"
            fullWidth={true}
            variant="light"
            startContent={<FaRegComment className="text-xl" />}
          >
            Comment
          </Button>
          <Button
            radius="sm"
            fullWidth={true}
            variant="light"
            startContent={<PiShareFatThin className="text-xl" />}
          >
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
