import React, { useEffect, useState } from "react";
import { counts, serverUrl } from "../Data/BrandData";
import axios from "axios";
const AcheivementsCount = () => {
  const [countStart, setCountStart] = useState(0);
  const countUp = (setCount, key, targetNumber, duration) => {
    try {
      if (typeof targetNumber !== "number" || isNaN(targetNumber)) {
        console.error("Invalid targetNumber for", key, targetNumber);
        return;
      }

      let start = 0;
      const increment = Math.max(1, Math.ceil(targetNumber / (duration / 10)));

      const timer = setInterval(() => {
        start += increment;

        setCount((prev) => {
          const value = start >= targetNumber ? targetNumber : start;

          if (value >= targetNumber) clearInterval(timer);

          return {
            ...prev,
            [key]: value,
          };
        });
      }, 10);
    } catch (error) {
      console.log(error);
    }
  };

  const [counters, setCounters] = useState({
    projectsCount: 0,
    clientsCount: 0,
    awardsCount: 0,
    hoursCount: 0,
  });

  const getCounters = async () => {
    try {
      const response = await axios.get(`${serverUrl}/counters`);
      if (response.data.message === "Success") {
        setCounters(response.data.data);
        setCountStart(1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCounters();
  }, []);

  useEffect(() => {
    if (!counters) return;
    countUp(setCounters, "clientsCount", counters.clientsCount, 5000);
    countUp(setCounters, "projectsCount", counters.projectsCount, 5500);
    countUp(setCounters, "awardsCount", counters.awardsCount, 5000);
    countUp(setCounters, "hoursCount", counters.hoursCount, 5000);
  }, [countStart]);
  return (
    <section className="py-5 pt-2">
      <div className="text-center" style={{ width: "100%" }}>
        <h2 className="mb-4 section-heading" style={{ fontWeight: "bold" }}>
          Our Achievements
        </h2>
        <div
          className="d-flex align-items-center justify-content-around flex-wrap"
          style={{ margin: "0" }}
        >
          <div className="counter" style={{ transition: "transform 0.3s" }}>
            <img
              src={require("./../Assets/output-onlinegiftools.gif")}
              alt="clients"
            />
            <h3 className="">
              {Number.isFinite(counters.clientsCount)
                ? counters.clientsCount
                : 0}
              +
            </h3>
            <p className="">
              Satisfied <br></br> Clients
            </p>
          </div>
          <div
            className="counter green"
            style={{ transition: "transform 0.3s" }}
          >
            <img src={require("./../Assets/list.gif")} alt="clients" />
            <h3 className="">
              {Number.isFinite(counters.projectsCount)
                ? counters.projectsCount
                : 0}
              +
            </h3>
            <p className="">
              Projects <br></br> Completed
            </p>
          </div>
          <div
            className="counter gray"
            style={{ transition: "transform 0.3s" }}
          >
            <img src={require("./../Assets/awards.gif")} alt="clients" />
            <h3 className="">
              {Number.isFinite(counters.awardsCount) ? counters.awardsCount : 0}
              +
            </h3>
            <p className="">
              Awards <br></br> Won
            </p>
          </div>
          <div
            className="counter blue"
            style={{ transition: "transform 0.3s" }}
          >
            <img src={require("./../Assets/hours.gif")} alt="clients" />
            <h3 className="">
              {Number.isFinite(counters.hoursCount) ? counters.hoursCount : 0}+
            </h3>
            <p className="">
              Hours <br></br> Worked
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcheivementsCount;
