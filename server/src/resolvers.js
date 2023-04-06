const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      console.log("Query.tracksForHome");
      return dataSources.trackAPI.getTracksForHome();
    },

    // First time passing an argument, but does argument only work for Query object?
    // get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => {
      console.log("Query.track");
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    // Is this considered resolver chain?
    author: ({ authorId }, _, { dataSources }) => {
      console.log("Track.author");
      return dataSources.trackAPI.getAuthor(authorId);
    },

    // Is this considered resolver chain?
    // Does the parent only work 1 level up, or can work multiple levels up?
    modules: ({ id }, _, { dataSources }) => {
      console.log("Track.modules");
      console.log(id);
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
