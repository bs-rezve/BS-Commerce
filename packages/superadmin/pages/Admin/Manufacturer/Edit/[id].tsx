import { NextPage } from "next";
import { useRouter } from "next/router";
import { userAPI } from "../../../../APIs";
import EditManufacturer from "../../../../components/manufacturer/editManufacturer";

const EditManufacturerPage: NextPage = ({ manufacturer }) => {
  return (
    <div className="bg-light">
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <EditManufacturer product={manufacturer} />
      </main>
    </div>
  );
};
export async function getServerSideProps(context) {
  const res = await userAPI.getManufacturer({ manufacturerId: context.params.id });
  return {
    props: { manufacturer: res?.data },
  };
}

export default EditManufacturerPage;
