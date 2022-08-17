import { useRouter } from 'next/router';

import { getAllEvents } from '../../dumy-data';

import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const AllEventsPage = () => {
  const events = getAllEvents();

  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
