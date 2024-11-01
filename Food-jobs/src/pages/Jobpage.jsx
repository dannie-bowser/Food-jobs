
// import { useState,useEffect } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaArrowLeft, FaMapMarker, FaMoneyBill, FaTag, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
 


const Jobpage = ({ deleteJob }) => {
   
   const navigate = useNavigate();
   const {id} = useParams();
   const job = useLoaderData();

   const onDeleteClick = (jobId) =>{
      const confirm = window.confirm('are you sure you want to delete this listing?');

     if (!confirm) return;

     deleteJob(jobId);

     toast.success('Job deleted successfully');

     navigate('/jobs');
   }
  //  const [job, setJob] = useState(null);
  //  const  [loading, setLoading] = useState(true);

  //  useEffect(() => { 
  //      const fetchJobs = async () => {
  //       try {
          
  //         const res = await fetch( `/api/jobs/${id}` );
  //         const data = await res.json();
  //         console.log(data)
  //         setJob(data);

  //       } catch (error) {

  //         console.log('Error fetching data', error);

  //       } finally {
          
  //         setLoading(false);

  //       }
  //      }
  //      fetchJobs();
  //  }, [])

   return (

    <>
     <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-green-500 hover:text-green-600 flex items-center"
        >
          <FaArrowLeft className=' mr-2 '/> Back to All Jobs
        </Link>
      </div>
    </section>

    <section className="bg-green-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4"><FaList className='inline mr-3 text-yellow-400'/>{job.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {job.title}
                <FaTag className='inline text-red-700 ml-5 text-2xl'/>
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker
                  className="fa-solid fa-location-dot text-lg text-green-700 mr-2"
                />
                <p className="text-green-700">{job.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-green-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
               {job.description}
              </p>

              <h3 className="text-slate-800 text-lg font-bold mb-2">Salary</h3>
              <p className="mb-4 text-red-700 font-bold">{job.salary}/ Year <FaMoneyBill className=' inline text-slate-400'/></p>
              
            </div>
          </main>

          {/* <!-- Sidebar --> */}
          <aside>
            {/* <!-- Company Info --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.company.name}</h2>

              <p className="my-2">
                {job.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-green-100 p-2 font-bold">
                {job.company.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-green-100 p-2 font-bold">{job.company.contactPhone}</p>
            </div>

            {/* <!-- Manage --> */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit-job/${job.id}`}
                className="bg-slate-500 hover:bg-slate-600 text-white text-center font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link
              >
              <button
                onClick={() => onDeleteClick(job.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    </>

   )
}

  const jobLoader = async ({ params }) => {
      const res = await fetch(`/api/jobs/${params.id}`);
      const data = await res.json();
      return data;
  }

export  { Jobpage as default, jobLoader };