import React, { useState, useEffect } from "react";
import { col, center } from "style/display";
import Card from "components/common/card";
import { CommunityAll } from "api/community/communityService";
export default function Communities() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { status, data } = await CommunityAll();
    if (status === 200) {
      setData(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className="text-3xl font-bold">커뮤니티</div>
      <div className={col(8, 80)}>
        <div className={col(2)}>
          {data.map(({ id, title, views, likeCount, commentCount }) => {
            return (
              <Card
                key={id}
                title={title}
                views={views}
                likeCount={likeCount}
                commentCount={commentCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
