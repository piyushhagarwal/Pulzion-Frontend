import React from "react";
import "../css/allCampaigns.css";
export default function AllCampaigns() {
  const campaigns = [
    {
      title: "1st NGO ",
      quantity: "50",
      description: "this ngo is located in pune",
    },
    {
      title: "2nd NGO",
      quantity: "50",
      description: "this ngo is located in pune",
    },
    {
      title: "3rd NGO",
      quantity: "50",
      description: "this ngo is located in pune",
    },
  ];
  return (
    <div class="allCampaigns">
      <h1 class="heading text-center m-5 display-2 pt-5">
        <b>Campaigns</b>
      </h1>
      <div class="row">
        {campaigns.map((campaign) => {
          return (
            <div class="ag-courses_item col-sm-3">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">{campaign.title}</div>
                <div class="ag-courses-item_title">{campaign.description}</div>

                <div class="ag-courses-item_date-box">
                  Quantity :
                  <span class="ag-courses-item_date">
                    {` ${campaign.quantity}`}
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
