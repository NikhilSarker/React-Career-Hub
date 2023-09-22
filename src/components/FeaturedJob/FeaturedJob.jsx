import PropTypes from "prop-types";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  console.log(job);
  return (
    <div className="card card-compact w-[648px] h-[392px]  rounded-lg border-[#E8E8E8] border-2 border-solid">
      <div>
        <img className="pt-10 pl-10"
          src={logo}
          alt="Company Logo"
        />
      </div>
      <div >
        <h2 className=" text-2xl font-extrabold text-[#474747] pt-8 pb-2 pl-6">{job_title}</h2>
        <p className="text-xl font-semibold text-[#757575] pl-6">{company_name}</p>
        <div className="pl-6 my-4">
          <button className="px-3 py-4 border-2 border-solid border-[#7E90FE] rounded-md mr-4 text-base font-extrabold text_color">{remote_or_onsite}</button>
          <button className="px-3 py-4 border-2 border-solid border-[#7E90FE] rounded-md text-base font-extrabold text_color">{job_type}</button>
        </div>
        <div className="flex pl-6">
          <div className="flex gap-3 mr-6 items-center text-[#757575] text-xl font-semibold"><FaMapMarkerAlt /> {location}</div>
          <div className="flex items-center  text-[#757575] text-xl font-semibold"><span className="text-2xl"><AiOutlineDollarCircle /></span> {salary}</div>
        </div>
        <div className="pl-6 pt-6 pb-6">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object,
};
export default FeaturedJob;
