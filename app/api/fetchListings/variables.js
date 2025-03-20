export const getVariables = ({ address, latitude, longitude, pageSize }) => ({
  input: {
    acidCarouselContext: null,
    childrenAges: [],
    dates: {
      checkin: "2024-06-18",
      checkout: "2024-06-19",
    },
    doAvailabilityCheck: false,
    encodedAutocompleteMeta: null,
    enableCampaigns: true,
    filters: {
      selectedFilters: "distance=3000",
    },
    selectedFilterSources: ["PREVIOUS"],
    flexibleDatesConfig: {
      broadDatesCalendar: {
        checkinMonths: [],
        los: [],
        startWeekdays: [],
      },
      dateFlexUseCase: "DATE_RANGE",
      dateRangeCalendar: {
        checkin: ["2024-06-18"],
        checkout: ["2024-06-19"],
      },
    },
    forcedBlocks: null,
    location: {
      searchString: address,
      destType: "LATLONG",
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    },
    metaContext: {
      metaCampaignId: 0,
      externalTotalPrice: null,
      feedPrice: null,
      hotelCenterAccountId: null,
      rateRuleId: null,
      dragongateTraceId: null,
      pricingProductsTag: null,
    },
    nbRooms: 1,
    nbAdults: 1,
    nbChildren: 0,
    showAparthotelAsHotel: true,
    needsRoomsMatch: false,
    optionalFeatures: {
      forceArpExperiments: true,
      testProperties: false,
    },
    pagination: {
      rowsPerPage: parseInt(pageSize),
      offset: 0,
    },
    rawQueryForSession:
      "/searchresults.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaGyIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4AofIxbMGwAIB0gIkNDFkMDkyZDktMDFlZC00NzMxLTkyMjMtNGFhYWIxNjEwMjg12AIF4AIB&sid=aa4f62f572ac5f487c282f0f11ec409c&aid=304142&ss=Bangalore&ssne=Bangalore&ssne_untouched=Bangalore&lang=en-gb&src=index&dest_id=-2090174&dest_type=city&checkin=2024-06-18&checkout=2024-06-19&group_adults=1&no_rooms=1&group_children=0&nflt=distance%3D3000",
    referrerBlock: null,
    sbCalendarOpen: false,
    sorters: {
      selectedSorter: null,
      referenceGeoId: null,
      tripTypeIntentId: null,
    },
    travelPurpose: 2,
    seoThemeIds: [],
    useSearchParamsFromSession: true,
    merchInput: {
      testCampaignIds: [],
    },
  },
  carouselLowCodeExp: false,
});
