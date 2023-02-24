import React, { useState, useEffect } from "react";

const IpAddressRequest = ({ ipType }) => {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const fetchIpAddress = async () => {
      const response = await fetch(`https://api.ipify.org?format=json&${ipType}`);
      const data = await response.json();
      setIpAddress(data.ip);
    };
    fetchIpAddress();
  }, [ipType]);

  return (
    <div>
      <h3>Public {ipType.toUpperCase()} Address</h3>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IpAddressRequest;
