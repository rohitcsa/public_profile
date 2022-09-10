import Script from "next/script";

const LinkedinBadge = () => {
  return (
    <>
      {false ? (
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="rohit-gupta-bb492b165"
          data-version="v1"
        ></div>
      ) : (
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="rohit-gupta-bb492b165"
          data-version="v1"
        ></div>
      )}
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      />
    </>
  );
};

export default LinkedinBadge;
