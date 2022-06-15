import type { NextPage } from "next";
import CampaignsList from "../components/campaign/campaignList";

const Campaigns: NextPage = () => {
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Campaigns</h2>
        <div className="float-end pb-2">
        <a className="btn btn-primary" href="/discount/create">
          <i className="bi bi-plus-square-fill mx-2"></i>
          Add new
        </a>
      </div> 
        <div className="mt-2 pt-1">
          <CampaignsList />
        </div>
      </main>
    </>
  );
};

export default Campaigns;
