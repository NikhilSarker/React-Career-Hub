import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const URL = "jobs.json";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="max-w-[1320px] m-auto">
      <div>
        <h2 className="text-5xl font-extrabold text-[#1A1919] text-center pb-4">
          Featured Jobs: {jobs.length}
        </h2>
        <p className="text-base font-medium text-[#757575] text-center pb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
          jobs?.map((job)=><FeaturedJob key={job.id} job={job}></FeaturedJob>)
        }

      </div>
    </div>
  );
};

export default FeaturedJobs;
