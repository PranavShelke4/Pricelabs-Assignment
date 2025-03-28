export const query = `
  query FullSearch($input: SearchQueryInput!, $carouselLowCodeExp: Boolean!) {
    searchQueries {
      search(input: $input) {
        ...FullSearchFragment
        __typename
      }
      __typename
    }
  }

  fragment FullSearchFragment on SearchQueryOutput {
    banners {
      ...Banner
      __typename
    }
    breadcrumbs {
      ... on SearchResultsBreadcrumb {
        ...SearchResultsBreadcrumb
        __typename
      }
      ... on LandingPageBreadcrumb {
        ...LandingPageBreadcrumb
        __typename
      }
      __typename
    }
    carousels {
      ...Carousel
      __typename
    }
    destinationLocation {
      ...DestinationLocation
      __typename
    }
    entireHomesSearchEnabled
    dateFlexibilityOptions {
      enabled
      __typename
    }
    flexibleDatesConfig {
      broadDatesCalendar {
        checkinMonths
        los
        startWeekdays
        losType
        __typename
      }
      dateFlexUseCase
      dateRangeCalendar {
        flexWindow
        checkin
        checkout
        __typename
      }
      __typename
    }
    filters {
      ...FilterData
      __typename
    }
    filtersTrackOnView {
      type
      experimentHash
      value
      __typename
    }
    appliedFilterOptions {
      ...FilterOption
      __typename
    }
    recommendedFilterOptions {
      ...FilterOption
      __typename
    }
    pagination {
      nbResultsPerPage
      nbResultsTotal
      __typename
    }
    tripTypes {
      ...TripTypesData
      __typename
    }
    results {
      ...BasicPropertyData
      ...MatchingUnitConfigurations
      ...PropertyBlocks
      ...BookerExperienceData
      priceDisplayInfoIrene {
        ...PriceDisplayInfoIrene
        __typename
      }
      licenseDetails {
        nextToHotelName
        __typename
      }
      isTpiExclusiveProperty
      propertyCribsAvailabilityLabel
      mlBookingHomeTags
      trackOnView {
        experimentTag
        __typename
      }
      __typename
    }
    searchMeta {
      ...SearchMetadata
      __typename
    }
    sorters {
      option {
        ...SorterFields
        __typename
      }
      __typename
    }
    oneOfThreeDeal {
      ...OneOfThreeDeal
      __typename
    }
    zeroResultsSection {
      ...ZeroResultsSection
      __typename
    }
    rocketmilesSearchUuid
    previousSearches {
      ...PreviousSearches
      __typename
    }
    frontierThemes {
      ...FrontierThemes
      __typename
    }
    merchComponents {
      ...MerchRegionIrene
      __typename
    }
    wishlistData {
      numProperties
      __typename
    }
    seoThemes {
      id
      caption
      __typename
    }
    __typename
  }

  fragment BasicPropertyData on SearchResultProperty {
    acceptsWalletCredit
    basicPropertyData {
      accommodationTypeId
      id
      isTestProperty
      location {
        address
        city
        countryCode
        __typename
      }
      pageName
      ufi
      photos {
        main {
          highResUrl {
            relativeUrl
            __typename
          }
          lowResUrl {
            relativeUrl
            __typename
          }
          highResJpegUrl {
            relativeUrl
            __typename
          }
          lowResJpegUrl {
            relativeUrl
            __typename
          }
          __typename
        }
        __typename
      }
      reviewScore: reviews {
        score: totalScore
        reviewCount: reviewsCount
        totalScoreTextTag {
          translation
          __typename
        }
        showScore
        secondaryScore
        secondaryTextTag {
          translation
          __typename
        }
        showSecondaryScore
        __typename
      }
      externalReviewScore: externalReviews {
        score: totalScore
        reviewCount: reviewsCount
        showScore
        totalScoreTextTag {
          translation
          __typename
        }
        __typename
      }
      starRating {
        value
        symbol
        caption {
          translation
          __typename
        }
        tocLink {
          translation
          __typename
        }
        showAdditionalInfoIcon
        __typename
      }
      isClosed
      paymentConfig {
        installments {
          minPriceFormatted
          maxAcceptCount
          __typename
        }
        __typename
      }
      __typename
    }
    badges {
      caption {
        translation
        __typename
      }
      closedFacilities {
        startDate
        endDate
        __typename
      }
      __typename
    }
    customBadges {
      showSkiToDoor
      showBhTravelCreditBadge
      showOnlineCheckinBadge
      __typename
    }
    description {
      text
      __typename
    }
    displayName {
      text
      translationTag {
        translation
        __typename
      }
      __typename
    }
    geniusInfo {
      benefitsCommunication {
        header {
          title
          __typename
        }
        items {
          title
          __typename
        }
        __typename
      }
      geniusBenefits
      geniusBenefitsData {
        hotelCardHasFreeBreakfast
        hotelCardHasFreeRoomUpgrade
        sortedBenefits
        __typename
      }
      showGeniusRateBadge
      __typename
    }
    location {
      displayLocation
      mainDistance
      publicTransportDistanceDescription
      skiLiftDistance
      beachDistance
      nearbyBeachNames
      beachWalkingTime
      geoDistanceMeters
      __typename
    }
    mealPlanIncluded {
      mealPlanType
      text
      __typename
    }
    persuasion {
      autoextended
      geniusRateAvailable
      highlighted
      preferred
      preferredPlus
      showNativeAdLabel
      nativeAdId
      nativeAdsCpc
      nativeAdsTracking
      sponsoredAdsData {
        isDsaCompliant
        legalEntityName
        sponsoredAdsDesign
        __typename
      }
      __typename
    }
    policies {
      showFreeCancellation
      showNoPrepayment
      enableJapaneseUsersSpecialCase
      __typename
    }
    ribbon {
      ribbonType
      text
      __typename
    }
    recommendedDate {
      checkin
      checkout
      lengthOfStay
      __typename
    }
    showGeniusLoginMessage
    hostTraderLabel
    soldOutInfo {
      isSoldOut
      messages {
        text
        __typename
      }
      alternativeDatesMessages {
        text
        __typename
      }
      __typename
    }
    nbWishlists
    visibilityBoosterEnabled
    showAdLabel
    isNewlyOpened
    propertySustainability {
      isSustainable
      tier {
        type
        __typename
      }
      facilities {
        id
        __typename
      }
      certifications {
        name
        __typename
      }
      chainProgrammes {
        chainName
        programmeName
        __typename
      }
      levelId
      __typename
    }
    seoThemes {
      caption
      __typename
    }
    relocationMode {
      distanceToCityCenterKm
      distanceToCityCenterMiles
      distanceToOriginalHotelKm
      distanceToOriginalHotelMiles
      phoneNumber
      __typename
    }
    bundleRatesAvailable
    __typename
  }

  fragment Banner on Banner {
    name
    type
    isDismissible
    showAfterDismissedDuration
    position
    requestAlternativeDates
    merchId
    title {
      text
      __typename
    }
    imageUrl
    paragraphs {
      text
      __typename
    }
    metadata {
      key
      value
      __typename
    }
    pendingReviewInfo {
      propertyPhoto {
        lowResUrl {
          relativeUrl
          __typename
        }
        lowResJpegUrl {
          relativeUrl
          __typename
        }
        __typename
      }
      propertyName
      urlAccessCode
      __typename
    }
    nbDeals
    primaryAction {
      text {
        text
        __typename
      }
      action {
        name
        context {
          key
          value
          __typename
        }
        __typename
      }
      __typename
    }
    secondaryAction {
      text {
        text
        __typename
      }
      action {
        name
        context {
          key
          value
          __typename
        }
        __typename
      }
      __typename
    }
    iconName
    flexibleFilterOptions {
      optionId
      filterName
      __typename
    }
    trackOnView {
      type
      experimentHash
      value
      __typename
    }
    dateFlexQueryOptions {
      text {
        text
        __typename
      }
      action {
        name
        context {
          key
          value
          __typename
        }
        __typename
      }
      isApplied
      __typename
    }
    __typename
  }

  fragment Carousel on Carousel {
    aggregatedCountsByFilterId
    carouselId
    position
    contentType
    hotelId
    name
    soldoutProperties
    priority
    themeId
    frontierThemeIds
    title {
      text
      __typename
    }
    slides {
      captionText {
        text
        __typename
      }
      name
      photoUrl
      subtitle {
        text
        __typename
      }
      type
      title {
        text
        __typename
      }
      action {
        context {
          key
          value
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }

  fragment DestinationLocation on DestinationLocation {
    name {
      text
      __typename
    }
    inName {
      text
      __typename
    }
    countryCode
    ufi
    __typename
  }

  fragment FilterData on Filter {
    trackOnView {
      type
      experimentHash
      value
      __typename
    }
    trackOnClick {
      type
      experimentHash
      value
      __typename
    }
    name
    field
    category
    filterStyle
    title {
      text
      translationTag {
        translation
        __typename
      }
      __typename
    }
    subtitle
    options {
      parentId
      genericId
      trackOnView {
        type
        experimentHash
        value
        __typename
      }
      trackOnClick {
        type
        experimentHash
        value
        __typename
      }
      trackOnSelect {
        type
        experimentHash
        value
        __typename
      }
      trackOnDeSelect {
        type
        experimentHash
        value
        __typename
      }
      trackOnViewPopular {
        type
        experimentHash
        value
        __typename
      }
      trackOnClickPopular {
        type
        experimentHash
        value
        __typename
      }
      trackOnSelectPopular {
        type
        experimentHash
        value
        __typename
      }
      trackOnDeSelectPopular {
        type
        experimentHash
        value
        __typename
      }
      ...FilterOption
      __typename
    }
    filterLayout {
      isCollapsable
      collapsedCount
      __typename
    }
    stepperOptions {
      min
      max
      default
      selected
      title {
        text
        translationTag {
          translation
          __typename
        }
        __typename
      }
      field
      labels {
        text
        translationTag {
          translation
          __typename
        }
        __typename
      }
      trackOnView {
        type
        experimentHash
        value
        __typename
      }
      trackOnClick {
        type
        experimentHash
        value
        __typename
      }
      trackOnSelect {
        type
        experimentHash
        value
        __typename
      }
      trackOnDeSelect {
        type
        experimentHash
        value
        __typename
      }
      trackOnClickDecrease {
        type
        experimentHash
        value
        __typename
      }
      trackOnClickIncrease {
        type
        experimentHash
        value
        __typename
      }
      trackOnDecrease {
        type
        experimentHash
        value
        __typename
      }
      trackOnIncrease {
        type
        experimentHash
        value
        __typename
      }
      __typename
    }
    sliderOptions {
      min
      max
      minSelected
      maxSelected
      minPriceStep
      minSelectedFormatted
      currency
      histogram
      selectedRange {
        translation
        __typename
      }
      __typename
    }
    __typename
  }

  fragment FilterOption on Option {
    optionId: id
    count
    selected
    urlId
    source
    additionalLabel {
      text
      translationTag {
        translation
        __typename
      }
      __typename
    }
    value {
      text
      translationTag {
        translation
        __typename
      }
      __typename
    }
    starRating {
      value
      symbol
      caption {
        translation
        __typename
      }
      showAdditionalInfoIcon
      __typename
    }
    __typename
  }

  fragment LandingPageBreadcrumb on LandingPageBreadcrumb {
    destType
    name
    urlParts
    __typename
  }

  fragment MatchingUnitConfigurations on SearchResultProperty {
    matchingUnitConfigurations {
      commonConfiguration {
        name
        unitId
        bedConfigurations {
          beds {
            count
            type
            __typename
          }
          nbAllBeds
          __typename
        }
        nbAllBeds
        nbBathrooms
        nbBedrooms
        nbKitchens
        nbLivingrooms
        nbUnits
        unitTypeNames {
          translation
          __typename
        }
        localizedArea {
          localizedArea
          unit
          __typename
        }
        __typename
      }
      unitConfigurations {
        name
        unitId
        bedConfigurations {
          beds {
            count
            type
            __typename
          }
          nbAllBeds
          __typename
        }
        apartmentRooms {
          config {
            roomId: id
            roomType
            bedTypeId
            bedCount: count
            __typename
          }
          roomName: tag {
            tag
            translation
            __typename
          }
          __typename
        }
        nbAllBeds
        nbBathrooms
        nbBedrooms
        nbKitchens
        nbLivingrooms
        nbUnits
        unitTypeNames {
          translation
          __typename
        }
        localizedArea {
          localizedArea
          unit
          __typename
        }
        unitTypeId
        __typename
      }
      __typename
    }
    __typename
  }

  fragment PropertyBlocks on SearchResultProperty {
    blocks {
      blockId {
        roomId
        occupancy
        policyGroupId
        packageId
        mealPlanId
        __typename
      }
      finalPrice {
        amount
        currency
        __typename
      }
      originalPrice {
        amount
        currency
        __typename
      }
      onlyXLeftMessage {
        tag
        variables {
          key
          value
          __typename
        }
        translation
        __typename
      }
      freeCancellationUntil
      hasCrib
      blockMatchTags {
        childStaysForFree
        __typename
      }
      thirdPartyInventoryContext {
        isTpiBlock
        __typename
      }
      __typename
    }
    __typename
  }

  fragment PriceDisplayInfoIrene on PriceDisplayInfoIrene {
    badges {
      name {
        translation
        __typename
      }
      tooltip {
        translation
        __typename
      }
      style
      identifier
      __typename
    }
    chargesInfo {
      translation
      __typename
    }
    displayPrice {
      copy {
        translation
        __typename
      }
      amountPerStay {
        amount
        amountRounded
        amountUnformatted
        currency
        __typename
      }
      __typename
    }
    priceBeforeDiscount {
      copy {
        translation
        __typename
      }
      amountPerStay {
        amount
        amountRounded
        amountUnformatted
        currency
        __typename
      }
      __typename
    }
    rewards {
      rewardsList {
        termsAndConditions
        amountPerStay {
          amount
          amountRounded
          amountUnformatted
          currency
          __typename
        }
        breakdown {
          productType
          amountPerStay {
            amount
            amountRounded
            amountUnformatted
            currency
            __typename
          }
          __typename
        }
        __typename
      }
      rewardsAggregated {
        amountPerStay {
          amount
          amountRounded
          amountUnformatted
          currency
          __typename
        }
        copy {
          translation
          __typename
        }
        __typename
      }
      __typename
    }
    useRoundedAmount
    discounts {
      amount {
        amount
        amountRounded
        amountUnformatted
        currency
        __typename
      }
      name {
        translation
        __typename
      }
      description {
        translation
        __typename
      }
      itemType
      productId
      __typename
    }
    excludedCharges {
      excludeChargesAggregated {
        copy {
          translation
          __typename
        }
        amountPerStay {
          amount
          amountRounded
          amountUnformatted
          currency
          __typename
        }
        __typename
      }
      excludeChargesList {
        chargeMode
        chargeInclusion
        chargeType
        amountPerStay {
          amount
          amountRounded
          amountUnformatted
          currency
          __typename
        }
        __typename
      }
      __typename
    }
    taxExceptions {
      shortDescription {
        translation
        __typename
      }
      longDescription {
        translation
        __typename
      }
      __typename
    }
    __typename
  }

  fragment BookerExperienceData on SearchResultProperty {
    bookerExperienceContentUIComponentProps {
      ... on BookerExperienceContentLoyaltyBadgeListProps {
        badges {
          variant
          key
          title
          popover
          logoSrc
          logoAlt
          __typename
        }
        __typename
      }
      ... on BookerExperienceContentFinancialBadgeProps {
        paymentMethod
        backgroundColor
        hideAccepted
        __typename
      }
      __typename
    }
    __typename
  }

  fragment SearchMetadata on SearchMeta {
    availabilityInfo {
      hasLowAvailability
      unavailabilityPercent
      totalAvailableNotAutoextended
      __typename
    }
    boundingBoxes {
      swLat
      swLon
      neLat
      neLon
      type
      __typename
    }
    childrenAges
    dates {
      checkin
      checkout
      lengthOfStayInDays
      __typename
    }
    destId
    destType
    guessedLocation {
      destId
      destType
      destName
      __typename
    }
    maxLengthOfStayInDays
    nbRooms
    nbAdults
    nbChildren
    userHasSelectedFilters
    customerValueStatus
    isAffiliateBookingOwned
    affiliatePartnerChannelId
    affiliateVerticalType
    geniusLevel
    __typename
  }

  fragment SearchResultsBreadcrumb on SearchResultsBreadcrumb {
    destId
    destType
    name
    __typename
  }

  fragment SorterFields on SorterOption {
    type: name
    captionTranslationTag {
      translation
      __typename
    }
    tooltipTranslationTag {
      translation
      __typename
    }
    isSelected: selected
    __typename
  }

  fragment OneOfThreeDeal on OneOfThreeDeal {
    id
    uuid
    winnerHotelId
    winnerBlockId
    priceDisplayInfoIrene {
      displayPrice {
        amountPerStay {
          amountRounded
          amountUnformatted
          __typename
        }
        __typename
      }
      __typename
    }
    locationInfo {
      name
      inName
      destType
      __typename
    }
    destinationType
    commonFacilities {
      id
      name
      __typename
    }
    tpiParams {
      wholesalerCode
      rateKey
      rateBlockId
      bookingRoomId
      supplierId
      __typename
    }
    properties {
      priceDisplayInfoIrene {
        priceBeforeDiscount {
          amountPerStay {
            amountRounded
            amountUnformatted
            __typename
          }
          __typename
        }
        displayPrice {
          amountPerStay {
            amountRounded
            amountUnformatted
            __typename
          }
          __typename
        }
        __typename
      }
      basicPropertyData {
        id
        name
        pageName
        photos {
          main {
            highResUrl {
              absoluteUrl
              __typename
            }
            __typename
          }
          __typename
        }
        location {
          address
          countryCode
          __typename
        }
        reviews {
          reviewsCount
          totalScore
          __typename
        }
        __typename
      }
      blocks {
        thirdPartyInventoryContext {
          rateBlockId
          rateKey
          wholesalerCode
          tpiRoom {
            bookingRoomId
            __typename
          }
          supplierId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }

  fragment TripTypesData on TripTypes {
    beach {
      isBeachUfi
      isEnabledBeachUfi
      __typename
    }
    ski {
      isSkiExperience
      isSkiScaleUfi
      __typename
    }
    __typename
  }

  fragment ZeroResultsSection on ZeroResultsSection {
    title {
      text
      __typename
    }
    primaryAction {
      text {
        text
        __typename
      }
      action {
        name
        __typename
      }
      __typename
    }
    paragraphs {
      text
      __typename
    }
    type
    __typename
  }

  fragment PreviousSearches on PreviousSearch {
    childrenAges
    __typename
  }

  fragment FrontierThemes on FrontierTheme {
    id
    name
    selected
    __typename
  }

  fragment MerchRegionIrene on MerchComponentsResultIrene {
    regions {
      id
      components {
        ... on PromotionalBannerIrene {
          promotionalBannerCampaignId
          contentArea {
            title {
              ... on PromotionalBannerSimpleTitleIrene {
                value
                __typename
              }
              __typename
            }
            subTitle {
              ... on PromotionalBannerSimpleSubTitleIrene {
                value
                __typename
              }
              __typename
            }
            caption {
              ... on PromotionalBannerSimpleCaptionIrene {
                value
                __typename
              }
              ... on PromotionalBannerCountdownCaptionIrene {
                campaignEnd
                __typename
              }
              __typename
            }
            buttons {
              variant
              cta {
                ariaLabel
                text
                targetLanding {
                  ... on OpenContextSheet {
                    sheet {
                      ... on WebContextSheet {
                        title
                        body {
                          items {
                            ... on ContextSheetTextItem {
                              text
                              __typename
                            }
                            ... on ContextSheetList {
                              items {
                                text
                                __typename
                              }
                              __typename
                            }
                            __typename
                          }
                          __typename
                        }
                        buttons {
                          variant
                          cta {
                            text
                            ariaLabel
                            targetLanding {
                              ... on DirectLinkLanding {
                                urlPath
                                queryParams {
                                  name
                                  value
                                  __typename
                                }
                                __typename
                              }
                              ... on LoginLanding {
                                stub
                                __typename
                              }
                              ... on DeeplinkLanding {
                                urlPath
                                queryParams {
                                  name
                                  value
                                  __typename
                                }
                                __typename
                              }
                              ... on ResolvedLinkLanding {
                                url
                                __typename
                              }
                              __typename
                            }
                            __typename
                          }
                          __typename
                        }
                        __typename
                      }
                      __typename
                    }
                    __typename
                  }
                  ... on SearchResultsLandingIrene {
                    destType
                    destId
                    checkin
                    checkout
                    nrAdults
                    nrChildren
                    childrenAges
                    nrRooms
                    filters {
                      name
                      value
                      __typename
                    }
                    __typename
                  }
                  ... on DirectLinkLandingIrene {
                    urlPath
                    queryParams {
                      name
                      value
                      __typename
                    }
                    __typename
                  }
                  ... on LoginLandingIrene {
                    stub
                    __typename
                  }
                  ... on DeeplinkLandingIrene {
                    urlPath
                    queryParams {
                      name
                      value
                      __typename
                    }
                    __typename
                  }
                  ... on SorterLandingIrene {
                    sorterName
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          designVariant {
            ... on DesktopPromotionalFullBleedImageIrene {
              image: image {
                id
                url(width: 814, height: 138)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            ... on DesktopPromotionalImageLeftIrene {
              imageOpt: image {
                id
                url(width: 248, height: 248)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            ... on DesktopPromotionalImageRightIrene {
              imageOpt: image {
                id
                url(width: 248, height: 248)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            ... on MdotPromotionalFullBleedImageIrene {
              image: image {
                id
                url(width: 358, height: 136)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            ... on MdotPromotionalImageLeftIrene {
              imageOpt: image {
                id
                url(width: 128, height: 128)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            ... on MdotPromotionalImageRightIrene {
              imageOpt: image {
                id
                url(width: 128, height: 128)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            ... on MdotPromotionalImageTopIrene {
              imageOpt: image {
                id
                url(width: 128, height: 128)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            ... on MdotPromotionalIllustrationLeftIrene {
              imageOpt: image {
                id
                url(width: 200, height: 200)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            ... on MdotPromotionalIllustrationRightIrene {
              imageOpt: image {
                id
                url(width: 200, height: 200)
                alt
                overlayGradient
                primaryColorHex
                __typename
              }
              colorScheme
              signature
              __typename
            }
            __typename
          }
          __typename
        }
        ... on MerchCarouselIrene @include(if: $carouselLowCodeExp) {
          carouselCampaignId
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
`;
