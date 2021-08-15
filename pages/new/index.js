import Head from "next/head";
import router, { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();
  const addMeetUp = async (meetupData) => {
    const response = await fetch("/api/new", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>React Meetups | Add</title>
        <meta name="description" content="Add new meetups!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUp} />
    </Fragment>
  );
};

export default NewMeetup;
