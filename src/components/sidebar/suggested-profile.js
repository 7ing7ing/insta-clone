import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);

    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  //Array to set dummy profile account for new accounts, since users can't set the profile account in this clone
  const existingUsers = ["raphael", "dali", "orwell", "ting"];

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={
            existingUsers.includes(username)
              ? `/images/avatars/${username}.jpg`
              : "/images/avatars/dummyUser.jpg"
          }
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div>
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
