import { getFeaturedEvents } from '../dumy-data';

import EventList from '../components/events/EventList';
import { Fragment } from 'react';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventList items={featuredEvents} />
    </Fragment>
  );
};

export default HomePage;
