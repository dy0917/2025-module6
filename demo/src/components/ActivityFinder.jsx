import { useState, useEffect } from "react";
import { useData } from "../utils/useData";
export default function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  // const [activity, setActivity] = useState("");
  const data = useData(
    "/api/activity?" + "participants=" + participants
  );
  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {data}
      </div>
    </div>
  );
}
