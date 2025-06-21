import UseAuth from "../../Contexts/UseAuth";

const DetailsItemsApi = async () => {
  const {user} = UseAuth()
 
  const res = await fetch('https://where-is-it-server-ten.vercel.app/allItems', {
    headers: {
      authorization: `Bearer ${user.accessToken}`,
    },
  });

  const data = await res.json();
  return data;
};

export default DetailsItemsApi;
