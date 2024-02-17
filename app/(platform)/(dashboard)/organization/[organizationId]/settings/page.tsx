import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "90%",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
