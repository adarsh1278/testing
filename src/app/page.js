"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import { getManagerDetail } from '@/store/Actions/manger_detail'; // Import your action here

const ManagerDetailPage = () => {
  const dispatch = useDispatch();

  
  const { managerDetail, loading, error } = useSelector((state) => state.manager);


  useEffect(() => {
    console.log("dispath -------",dispatch)
    console.log("manager detail" , managerDetail)
    dispatch(getManagerDetail());
   
  }, [dispatch]);

  return (
    <div>
      <h1>Manager Details</h1>

      
      {loading && <p>Loading.</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {managerDetail && (
        <div>
          <p> Id:{managerDetail.id}</p>
          <p>Email: {managerDetail.email}</p>
          <p>Manager Type: {managerDetail.managertype}</p>
         
        </div>
      )}
    </div>
  );
};

export default ManagerDetailPage;
