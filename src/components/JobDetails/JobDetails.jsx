import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} =useParams();
  const idInt =parseInt(id)
  const job = jobs.find((job)=> job.id === idInt);
  const handleApplyJob = ()=>{
    saveJobApplication(idInt);
    toast("You have applied successfully!");
  };

  // console.log(job);
  return (
    <div className="max-w-[1320px] m-auto my-10">
      
      <div className="grid grid-cols-4 gap-4">
        <div className="border col-span-3">
          <h2><span className="text-base font-semibold">Job Description:</span> {job.job_description}</h2>
          <h2><span className="text-base font-semibold">Job Responsibility:</span> {job.job_responsibility}</h2>
        </div>
        <div className="border">
          <h2>Job details</h2>
          <button onClick={handleApplyJob} className="btn btn-accent">Apply</button>
          <ToastContainer />
        </div>
      </div>
      
    </div>
  );
};

export default JobDetails;