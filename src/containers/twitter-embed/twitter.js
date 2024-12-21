import React from "react";
import "./twitter.scss";
import {Tweet} from "react-tweet";
import {twitterDetails} from "../../portfolio";

export default function Twitter() {
  if (!twitterDetails.display) {
    return null;
  }

  if (!twitterDetails.userName) {
    console.error("Twitter username for the Twitter section is missing");
    return null;
  }

  // Example tweet ID - replace with actual tweet IDs if needed
  const sampleTweetId = "20"; // Replace this with a tweet ID relevant to the user

  return (
    <div className="tw-main-div" id="twitter">
      <div className="centerContent">
        <Tweet id={sampleTweetId} />
      </div>
    </div>
  );
}
