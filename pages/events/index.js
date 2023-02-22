import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";
import EventSearch from "./events-search";
import { Fragment } from "react";

function AllEventsPage() {
    const events = getAllEvents();

    return(
        <Fragment>
            <EventSearch />
            <EventList items={events}/>
        </Fragment>
    )
}

export default AllEventsPage;