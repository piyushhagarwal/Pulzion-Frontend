import React, { useContext, useState, useEffect } from "react";
import "../css/allCampaigns.css";
import NgoContext from "../context/ngoContext";
export default function AllCampaigns() {
  const context = useContext(NgoContext);
  const { getNgos, ngo } = context;

  useEffect(() => {
    return () => {
      getNgos();
    };
  }, []);

  return (
    <div class="allCampaigns" id="allCampaigns">
      <h1 class="heading text-center m-5 display-2 pt-5">
        <b>Campaigns</b>
      </h1>
      <div class="row">
        {ngo.map((campaign) => {
          return (
            <div class="ag-courses_item col-sm-3">
              <a href={`/${campaign._id}`} class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">{campaign.name}</div>
                <div class="ag-courses-item_desc">{campaign.description}</div>

                <div class="ag-courses-item_date-box">
                  Quantity :
                  <span class="ag-courses-item_date">{` ${campaign.quantity}`}</span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
