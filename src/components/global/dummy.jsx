// export const getStaticProps = async () => {
//     // Fetch static data at build time
//     const staticData = await fetchStaticData();
  
//     return {
//       props: { staticData },
//     };
//   };
  
//   function MyPage({ staticData }) {
//     useEffect(() => {
//       // Fetch dynamic data at runtime
//       const fetchData = async () => {
//         const dynamicData = await fetchDynamicData();
//         // Update state or do something with dynamicData
//       };
  
//       fetchData();
//     }, []);
  
//     // Render component using staticData
//     return (
//       <div>
//         <p>{staticData}</p>
//       </div>
//     );
//   }


import { useEffect, useState } from 'react';
function DynamicPage({ staticData, dynamicData }) {
  const [clientSideData, setClientSideData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/${dynamicData}`);
        const data = await response.json();
        setClientSideData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dynamicData]);

  return (
    <div>
      <h1>{staticData}</h1>
      {clientSideData && <p>{clientSideData}</p>}
    </div>
  );
}

export const getStaticPaths = async () => {
  // Fetch the list of dynamic paths
  const paths = await fetchDynamicPaths();

  return {
    paths,
    fallback: true, // or false if you want to return 404 for unknown paths
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch static data at build time
  const staticData = await fetchStaticData();

  return {
    props: {
      staticData,
      dynamicData: params.slug,
    },
  };
};

export default DynamicPage;
