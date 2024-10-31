
// import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';


const Jobpage = () => {
   
   const { id } = useParams();
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
    loading ? <Spinner /> : <h2>{ job.title }</h2>
   )
}

  const jobLoader = async (params) => {
    
  }

export default Jobpage