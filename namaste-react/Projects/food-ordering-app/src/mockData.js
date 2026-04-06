const mockData = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Cheesecake & Co.",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "782901",
              name: "Cheesecake & Co.",
              city: "Bangalore",
              slugs: {
                restaurant:
                  "cheesecake-&-co.-nagavara-&-hennur-nagavara-&-hennur",
                city: "bangalore",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
              locality: "Akashvani Layout",
              areaName: "Nagavara & Hennur",
              costForTwo: "30000",
              costForTwoMessage: "₹300 for two",
              cuisines: ["Bakery", "Desserts"],
              avgRating: 4.6,
              veg: true,
              feeDetails: {
                restaurantId: "782901",
                fees: [{}],
              },
              parentId: "387417",
              avgRatingString: "4.6",
              totalRatingsString: "1.3K+ ratings",
              sla: {
                restaurantId: "782901",
                deliveryTime: 32,
                minDeliveryTime: 30,
                maxDeliveryTime: 35,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 34,
                slaString: "30-35 MINS",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2026-03-29 00:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Flat ₹166 Off",
                shortDescriptionList: [
                  {
                    meta: "Flat ₹166 Off | Use SWIGGY6",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Flat ₹166 Off | Use SWIGGY6",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString:
                "cheesecake-&-co.-nagavara-&-hennur-nagavara-&-hennur",
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "No.81, Ground Floor, 4th Cross, Akashvani  Layout, Near Chowdeshwari Temple,  Dasarahalli, Bengaluru, Yelahanka, B.B.M.P  North, Karnataka-560024",
                },
                {
                  title: "Cuisines",
                  message: "Bakery,Desserts",
                },
              ],
              totalRatings: 1300,
              aggregatedDiscountInfoV2: {
                header: "Flat ₹166 Off",
                shortDescriptionList: [
                  {
                    meta: "Flat ₹166 Off | Use SWIGGY6",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Flat ₹166 Off | Use SWIGGY6",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  minValue: 125,
                  maxValue: 179,
                  priority: 2,
                  couponCode: "TRYNEW",
                  discountInfo: {
                    discountType: "Percentage",
                    value: 50,
                  },
                  lockedMessage:
                    "Add items worth ₹<amount> to save upto ₹100 | Code TRYNEW",
                  unlockedMessage:
                    "TRYNEW Coupon Unlocked! Use it to save upto ₹100",
                  logoCtx: {},
                  movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/782901",
              },
              generalPurposeInfoListV2: [
                {
                  cta: {
                    info: {
                      recordings: {},
                    },
                    linkCta: {},
                  },
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              restaurantCategory: "RESTAURANT_CATEGORY_GOURMET",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "13.054072,77.614655",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
            sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "50% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      offerIds: ["2379c56d-0852-4322-a54b-7cdd6675b700"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹179",
                      offerType: "offers",
                      restId: "782901",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE TRYNEW",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹100 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["bf7b599b-bf29-40f3-8ce1-78c2a031bde0"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAT100",
                      description: "ABOVE ₹399",
                      offerType: "offers",
                      restId: "782901",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FLAT100",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/3/22/8613045b-9f89-4ee0-93b2-aecb2c45b2fb_RuPay.png",
                      offerIds: ["e46bd31b-edd9-445b-9e1c-84805b05b625"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE RUPAYCC150",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "782901",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/3/22/8613045b-9f89-4ee0-93b2-aecb2c45b2fb_RuPay.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE RUPAYCC150",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "10% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/3/28/56e53f59-f1e2-4925-b128-1f61c6ea6f2e_HSBC.png",
                      offerIds: ["ca2f8605-4c57-488f-a515-f11c8d46b0bd"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE HSBCMATCH",
                      description: "ABOVE ₹699",
                      offerType: "offers",
                      restId: "782901",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/3/28/56e53f59-f1e2-4925-b128-1f61c6ea6f2e_HSBC.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE HSBCMATCH",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹166 OFF",
                      offerTag: "DEFAULT",
                      offerTagColor: "#E46D47",
                      logoBottom: "merch_bau/locked-badge.png",
                      offerIds: ["50703d18-e531-4d72-8d7e-80d5058f63a6"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE SWIGGY66",
                      description: "ABOVE ₹699",
                      offerType: "offers",
                      restId: "782901",
                      offerLogo: "merch_bau/locked-badge.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "OFFER UNLOCKS EVERY HOUR",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      isPureVeg: true,
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                      title: "Top Picks",
                      carousel: [
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "4566873",
                          creativeId: "TopPicks2024/127649036D.png",
                          title: "Blueberry Baked Cheesecake Jar",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "127649036",
                              name: "Blueberry Baked Cheesecake Jar",
                              category: "Jar",
                              description:
                                "Merry! That'S What Blueberry Baked Cheesecake Jars Make You",
                              imageId: "b02e34f9b87c8d3fa1e59d159d810a2c",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              parentId: "60104131",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "4566628",
                          creativeId: "TopPicks2024/127649041D.png",
                          title: "Chocolate Tiramisu Jar",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "127649041",
                              name: "Chocolate Tiramisu Jar",
                              category: "Jar",
                              description:
                                "Our Tiramisu Just Got Tastier With A Splash Of Chocolate. No Trick Only Treat!",
                              imageId: "6218ea2e54d29d27112b3752f636baf3",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              parentId: "60162850",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "4566604",
                          creativeId: "TopPicks2024/127649044D.png",
                          title: "Lotus Biscoff Baked Cheesecake Jar",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "127649044",
                              name: "Lotus Biscoff Baked Cheesecake Jar",
                              category: "Jar",
                              description:
                                "Smooth & Dense Cheesecake Jar For Caramelization-Crazy Sweet-Tooths",
                              imageId: "6dd0b17e20e49863396b5edde51719f1",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              parentId: "60597414",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "4610968",
                          creativeId: "TopPicks2024/127649055D.png",
                          title: "Tiramisu Jar",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "127649055",
                              name: "Tiramisu Jar",
                              category: "Jar",
                              description:
                                "Deep Satisfying Layers Of Sponge With Just The Right Amount Of Coffee And Chocolate Drizzles",
                              imageId: "1afb1ba4b1e22e5f0cd9cb691b67ed9d",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              parentId: "60104189",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "4566600",
                          creativeId: "TopPicks2024/127649037D.png",
                          title: "Brownie Baked Cheesecake Jar",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "127649037",
                              name: "Brownie Baked Cheesecake Jar",
                              category: "Jar",
                              description:
                                'Let\'S Get Rid Of All Those "Frownies" With Our High On Brownie Cheesecakes',
                              imageId: "ee096585cb0aff81fd46da1bcf8be100",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              parentId: "60597411",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "4566720",
                          creativeId: "TopPicks2024/127649035D.png",
                          title: "Belgian Chocolate Mousse Jar",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "127649035",
                              name: "Belgian Chocolate Mousse Jar",
                              category: "Jar",
                              description:
                                "Classic, Earthy Flavours Welcome You In This Oh So Yum! Mousse Jar",
                              imageId: "633660b90e4dd739107893bb59b1a6e9",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              parentId: "60104123",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Cake",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649059",
                              name: "Blueberry Baked Cheesecake",
                              category: "Cake",
                              description:
                                "Blueberries Just Got Comforting As They Came In With Our Cheesecake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/bff1b116-fc5a-44d2-adb0-0823a264c85f_cd037120-442d-4275-bd83-26b67c92b398.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134873",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 850,
                                        default: 1,
                                        id: "105434262",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1500,
                                        id: "105434261",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134873",
                                        variationId: "105434262",
                                      },
                                    ],
                                    price: 85000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134873",
                                        variationId: "105434261",
                                      },
                                    ],
                                    price: 150000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 85000,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "90 ratings",
                                  ratingCountV2: "90",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104130",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649067",
                              name: "Lotus Biscoff Baked Cheesecake",
                              category: "Cake",
                              description:
                                "Hyping Things Up With A Dose Of The Celebrated Lotus Biscoff",
                              imageId: "f08efbae23f8563f8b21865d258c6fa2",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134876",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 1000,
                                        default: 1,
                                        id: "105434268",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1800,
                                        id: "105434267",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134876",
                                        variationId: "105434268",
                                      },
                                    ],
                                    price: 100000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134876",
                                        variationId: "105434267",
                                      },
                                    ],
                                    price: 180000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 100000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "48 ratings",
                                  ratingCountV2: "48",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60597413",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649060",
                              name: "Brownie Baked Cheesecake",
                              category: "Cake",
                              description:
                                "Brownie baked cheesecake to beat days that seem super?downie",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/f48d3900-476c-4199-a675-57b9807b38c1_9466b85a-b090-449a-baed-c3ec5ee69f29.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134874",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 850,
                                        default: 1,
                                        id: "105434264",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1500,
                                        id: "105434263",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134874",
                                        variationId: "105434264",
                                      },
                                    ],
                                    price: 85000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134874",
                                        variationId: "105434263",
                                      },
                                    ],
                                    price: 150000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 85000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60215943",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649058",
                              name: "Belgian Chocolate Mousse Cake (half Kg)",
                              category: "Cake",
                              description:
                                'Here To Add That "Yum" Factor To Your Mousse Cake Cravings',
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/064bc961-a956-48af-8b8a-a164ffea95f2_b51bb740-a0e8-477d-b78c-e53053457c0d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 60000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "67 ratings",
                                  ratingCountV2: "67",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587808",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649081",
                              name: "Tiramisu Cake",
                              category: "Cake",
                              description:
                                "Transporting You To The Streets Of Italy With Our Authentic Tiramisu Cake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/c2309fc6-c594-4d33-951f-93f51b6a224d_950fb686-8ddb-4358-8c9b-12440e144d16.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134882",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 850,
                                        default: 1,
                                        id: "105434280",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1500,
                                        id: "105434279",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134882",
                                        variationId: "105434280",
                                      },
                                    ],
                                    price: 85000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134882",
                                        variationId: "105434279",
                                      },
                                    ],
                                    price: 150000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 85000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "36 ratings",
                                  ratingCountV2: "36",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60376201",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649071",
                              name: "Nutella Baked Cheesecake 1 Kg",
                              category: "Cake",
                              description:
                                "This One'S For You If You Love Nutella To The Moon And Back",
                              imageId: "c7acb3029440509aef78947ea63bd7ba",
                              inStock: 1,
                              isVeg: 1,
                              price: 180000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "60104162",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649069",
                              name: "New York Baked Cheesecake",
                              category: "Cake",
                              description:
                                "No Compromise On Classics! Bestseller Alert",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/f9b386c1-438f-434a-8e3a-ee2bdf6bc6ef_7b85758f-5af6-4301-8026-cb1259d80561.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134877",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 850,
                                        default: 1,
                                        id: "105434270",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1500,
                                        id: "105434269",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134877",
                                        variationId: "105434270",
                                      },
                                    ],
                                    price: 85000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134877",
                                        variationId: "105434269",
                                      },
                                    ],
                                    price: 150000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 85000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "25 ratings",
                                  ratingCountV2: "25",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104158",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "169758836",
                              name: "Kitkat Baked Cheesecake 1 Kg",
                              category: "Cake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/7642e548-7bd0-4bb7-97d4-7c940eec4f97_2512af08-9f23-42ef-b392-5d7234225b1d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 180000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "102410398",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649080",
                              name: "Strawberry Baked Cheesecake",
                              category: "Cake",
                              description:
                                'Just One Word "Lip-Smacking". Take Our Word For It',
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/ba32a18a-e9db-497e-bd7a-3ca0f138193c_aa18aafe-5dac-4223-bb4c-85aff367c227.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134881",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 850,
                                        default: 1,
                                        id: "105434278",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1500,
                                        id: "105434277",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134881",
                                        variationId: "105434278",
                                      },
                                    ],
                                    price: 85000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134881",
                                        variationId: "105434277",
                                      },
                                    ],
                                    price: 150000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 85000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104184",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649076",
                              name: "Rainbow Cake 1 Kg",
                              category: "Cake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/092e6a8e-3aac-4afb-8adf-5370f1c26a8f_d07d7a68-fdf1-4de2-bf5e-12390cc0a8d0.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 150000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587824",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649062",
                              name: "Chocolate Tiramisu Cake 1 Kg",
                              category: "Cake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/19050b5a-40fa-47d4-b7fe-d4c54e7b2164_4cba46c7-b5f6-46e3-a2dc-a0a1104ea4a9.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 150000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65804729",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649070",
                              name: "Nutella Baked Cheesecake (half Kg)",
                              category: "Cake",
                              description:
                                "This One'S For You If You Love Nutella To The Moon And Back",
                              imageId: "236d8476f215892286c2ef928ac7edc0",
                              inStock: 1,
                              isVeg: 1,
                              price: 100000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587819",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649057",
                              name: "Belgian Chocolate Mousse 1 Kg",
                              category: "Cake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/064bc961-a956-48af-8b8a-a164ffea95f2_b51bb740-a0e8-477d-b78c-e53053457c0d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 110000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104119",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649073",
                              name: "Pineapple Baked Cheesecake",
                              category: "Cake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/7aef758c-b3a2-430f-b32e-44aa2800ad27_1546fb5e-0998-443b-af67-9fed37449c58.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134879",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 850,
                                        default: 1,
                                        id: "105434274",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1500,
                                        id: "105434273",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134879",
                                        variationId: "105434274",
                                      },
                                    ],
                                    price: 85000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134879",
                                        variationId: "105434273",
                                      },
                                    ],
                                    price: 150000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 85000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "66618410",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649072",
                              name: "Nutella Mousse Cake",
                              category: "Cake",
                              description:
                                "Just Order! You Don'T Need A Reason To Savor On Nutella",
                              imageId: "de9b12ddec96870d58ba106533976d47",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134878",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1kg",
                                        price: 1300,
                                        id: "105434271",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Half Kg",
                                        price: 800,
                                        default: 1,
                                        id: "105434272",
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134878",
                                        variationId: "105434272",
                                      },
                                    ],
                                    price: 80000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134878",
                                        variationId: "105434271",
                                      },
                                    ],
                                    price: 130000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 80000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587821",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "153176552",
                              name: "Salted Caramel Cheesecake",
                              category: "Cake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/22/a53ebedd-f7b1-421f-857f-e13255fa6ae8_58649ec2-801c-4089-841b-b56a3565040d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "49508371",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 850,
                                        default: 1,
                                        id: "155277320",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1500,
                                        id: "155277319",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "49508371",
                                        variationId: "155277320",
                                      },
                                    ],
                                    price: 85000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "49508371",
                                        variationId: "155277319",
                                      },
                                    ],
                                    price: 150000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 85000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "91167549",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "169758837",
                              name: "Kitkat Baked Cheesecake 1/2 Kg",
                              category: "Cake",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/7642e548-7bd0-4bb7-97d4-7c940eec4f97_2512af08-9f23-42ef-b392-5d7234225b1d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 100000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "102410397",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649063",
                              name: "Chocolate Tiramisu Half Kg",
                              category: "Cake",
                              description:
                                "Your Favourite Chocolate Just Found Its Way In The Traditional Tiramisu! Delightful Isn'T It?",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/19050b5a-40fa-47d4-b7fe-d4c54e7b2164_4cba46c7-b5f6-46e3-a2dc-a0a1104ea4a9.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 85000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587809",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649078",
                              name: "Red Velvet Cake",
                              category: "Cake",
                              description:
                                "You Don'T Need An Occasion To Order In Our Red Velvet Cake. Mark Our Words.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/22321b50-ed94-474a-ad6f-b51dc1861e04_5dee8123-c276-403a-be9c-13f9f35101f9.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134880",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1kg",
                                        price: 1100,
                                        id: "105434275",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Half Kg",
                                        price: 600,
                                        default: 1,
                                        id: "105434276",
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134880",
                                        variationId: "105434276",
                                      },
                                    ],
                                    price: 60000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134880",
                                        variationId: "105434275",
                                      },
                                    ],
                                    price: 110000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 60000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104178",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649077",
                              name: "Rainbow Cake Half Kg",
                              category: "Cake",
                              description:
                                "Sprinkling Just The Right Amount Of Colors In Your Life. Brightning Up Your Days And How",
                              imageId: "c5b2d251adc0e25e60fc278a067cde8e",
                              inStock: 1,
                              isVeg: 1,
                              price: 75000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104174",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649066",
                              name: "Kitkat Cake (half Kg)",
                              category: "Cake",
                              description:
                                "Let'S Take A Break And Dig Into The Kitkat Cake. Are You Ready?",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/f90f23d1-13bf-4f8b-8bbb-010a6ff9c5de_b94a9ce5-3edc-4826-bdc2-f647ef43cd39.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 75000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587814",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649065",
                              name: "Gourmet Chocolate Truffle Cake",
                              category: "Cake",
                              description:
                                "Spoiling You With Options And How! Gourmet Chocolate Truffle = Royalty",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/90ac2926-243f-4e72-bf15-cda59737333a_aa9e977c-43f7-4606-944a-747d34e2c4d7.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "34134875",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half Kg",
                                        price: 600,
                                        default: 1,
                                        id: "105434266",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1kg",
                                        price: 1100,
                                        id: "105434265",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "34134875",
                                        variationId: "105434266",
                                      },
                                    ],
                                    price: 60000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "34134875",
                                        variationId: "105434265",
                                      },
                                    ],
                                    price: 110000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 60000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104147",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649068",
                              name: "Milk Chocolate Truffle Cake (half Kg)",
                              category: "Cake",
                              description:
                                "Classic Sweet Treat For Milk Chocolate Fans",
                              imageId: "bdaebff7a8903b8bcad711c678350877",
                              inStock: 1,
                              isVeg: 1,
                              price: 60000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587815",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "189171972",
                              name: "Rum & Raisin Cake",
                              category: "Cake",
                              description:
                                "Alcohol-Free Rum & Raisin Cake With Soft Crumb, Juicy Raisins, And Rich Chocolate Flavour . Classic Flavour, Zero Alcohol , Pure Indulgence.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/16/046cffb9-9708-4353-be17-37e8a2b43104_44e6bf0b-47b0-4685-81d0-3dd718f4e1d1.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 85000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "115098725",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649064",
                              name: "German Black Forest Half Kg",
                              category: "Cake",
                              description:
                                "German Black Forest Cake In Its Most Authentic Form Delivered Right At Your Doorstep",
                              imageId: "be1a001f2ea336e947540c4e14ff7421",
                              inStock: 1,
                              isVeg: 1,
                              price: 65000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587812",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649074",
                              name: "Pineapple Cake Half Kg",
                              category: "Cake",
                              description:
                                "Fruity Cake Lovers Are In For A Surprise In This Pineapple Delight!!",
                              imageId: "cc772764b0bd004a00880636bb0eaef3",
                              inStock: 1,
                              isVeg: 1,
                              price: 65000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587822",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/4/25/bff1b116-fc5a-44d2-adb0-0823a264c85f_cd037120-442d-4275-bd83-26b67c92b398.jpg",
                      categoryId: "42312712",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Slices",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649088",
                              name: "Lotus Biscoff Baked Cheesecake Slice",
                              category: "Slices",
                              description:
                                "Caramelized Cravings Taken Care Here. It'S A Promise",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/df4e402d-4a3e-4692-aeb6-7dbd454fc228_c28b044c-4cc3-4540-acd2-849424dcc599.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "124 ratings",
                                  ratingCountV2: "124",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60376195",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649084",
                              name: "Blueberry Baked Cheesecake Slice",
                              category: "Slices",
                              description:
                                "Berry Berry So Very Merry! Dig In Now!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/533df5ca-4149-492b-9d85-7eea92dcc973_287567e1-779a-492a-a28e-b98b2c7602b4.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "162 ratings",
                                  ratingCountV2: "162",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104133",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649090",
                              name: "Nutella Baked Cheesecake Slice",
                              category: "Slices",
                              description:
                                "We Know You Love Nutella, You Love Our Cheesecakes Which Means You'Ll Love This Drool-Worthy Combo Too",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/0193cf8d-362c-47ab-917b-bc2af278081f_b86fd1c6-9d5f-4e45-b8be-e5c6a40b7199.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "64 ratings",
                                  ratingCountV2: "64",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587820",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649085",
                              name: "Brownie Cheesecake Slice",
                              category: "Slices",
                              description:
                                "You Asked For A Brownie Cheesecake! Without A Second Thought We Made Your Dream A Reality",
                              imageId: "10bed6f43e016e94acb55b37f31b72ee",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "44 ratings",
                                  ratingCountV2: "44",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104137",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649089",
                              name: "New York Baked Cheesecake Slice",
                              category: "Slices",
                              description:
                                "Trust Us On The Classics! You'Ll Keep Coming Back For More!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/3977d66a-a99c-42e2-864a-5e85b294339b_32b40309-bda5-4c0d-94d6-0818608a8452.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "88 ratings",
                                  ratingCountV2: "88",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587817",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649095",
                              name: "Strawberry Baked Cheesecake Slice",
                              category: "Slices",
                              description:
                                "Strawberry Lovers Are In For A Surprise! Spreading Berryness And How",
                              imageId: "72f6bf3a2b621d50609bd3090285b1c8",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "41 ratings",
                                  ratingCountV2: "41",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104187",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "169758834",
                              name: "Kitkat Baked Cheesecake Slice",
                              category: "Slices",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/8e5c2a28-2c5e-4bc8-bb41-05ef232f6008_819780cf-2e04-40b8-98c5-1fe4db311b34.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "102410400",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649092",
                              name: "Pineapple Baked Cheesecake Slice",
                              category: "Slices",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/b9eb1475-c1f6-4ddc-bf14-a09cb388bfb3_fae21b8f-0c6a-4581-ab50-975e00a34e37.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "66618412",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649087",
                              name: "Gourmet Chocolate Truffle Slice",
                              category: "Slices",
                              description:
                                "Never Too Late, Never Too Old For Gourmet Chocolate Truffle. Isn'T It?",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/d87af184-fa39-48bc-835f-f9cd2f472582_696f2020-dadd-48de-ae41-aaa1c4b400f9.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "28 ratings",
                                  ratingCountV2: "28",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104151",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649083",
                              name: "Belgian Chocolate Mousse Slice",
                              category: "Slices",
                              description:
                                "Time To Get In That Chocolate Kick Rolling!",
                              imageId: "2f0b0d8f115088062acd651cead6d00a",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "33 ratings",
                                  ratingCountV2: "33",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104125",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649086",
                              name: "Chocolate Tiramisu Slice",
                              category: "Slices",
                              description:
                                "Best Of All Worlds Come Together In This Slice Of Wholesomeness! Delicious!!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/e8eef9ca-342c-433f-b05d-0ae07d967e85_6bb4714e-dea6-42fe-b6cf-0db20bbfcf53.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "40 ratings",
                                  ratingCountV2: "40",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104141",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "153176553",
                              name: "Salted Caramel Cheesecake Slice",
                              category: "Slices",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/81b6c5ad-c566-4c85-92c4-d2eca0e606da_1e3ded67-ec05-40d5-ac88-2c8115624846.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "91167551",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649091",
                              name: "Nutella Mousse Slice",
                              category: "Slices",
                              description:
                                "A Dense Nutella Loaded Mousse Slice Should Do The Trick. It'S A Catch.",
                              imageId: "6b6dd7fd0c7de1d3a94c014d81b911dd",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60479819",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649093",
                              name: "Rainbow Slice",
                              category: "Slices",
                              description:
                                "As Satisfying As The Drops Of The First Rainfall! Go For It",
                              imageId: "1d25b2019816287de89445c3f0a5b291",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "16 ratings",
                                  ratingCountV2: "16",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587826",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649094",
                              name: "Red Velvet Slice",
                              category: "Slices",
                              description:
                                "Alert! Cream Cheese Frosting Worth Dying For",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/abf4b091-f3de-4b52-8c28-6baebc0c2050_0181c3ce-060e-4bf9-86ca-fd147402b503.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104183",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/4/25/df4e402d-4a3e-4692-aeb6-7dbd454fc228_c28b044c-4cc3-4540-acd2-849424dcc599.jpg",
                      categoryId: "42312713",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Jar",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649036",
                              name: "Blueberry Baked Cheesecake Jar",
                              category: "Jar",
                              description:
                                "Merry! That'S What Blueberry Baked Cheesecake Jars Make You",
                              imageId: "b02e34f9b87c8d3fa1e59d159d810a2c",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "91 ratings",
                                  ratingCountV2: "91",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104131",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649044",
                              name: "Lotus Biscoff Baked Cheesecake Jar",
                              category: "Jar",
                              description:
                                "Smooth & Dense Cheesecake Jar For Caramelization-Crazy Sweet-Tooths",
                              imageId: "6dd0b17e20e49863396b5edde51719f1",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "47 ratings",
                                  ratingCountV2: "47",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60597414",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649037",
                              name: "Brownie Baked Cheesecake Jar",
                              category: "Jar",
                              description:
                                'Let\'S Get Rid Of All Those "Frownies" With Our High On Brownie Cheesecakes',
                              imageId: "ee096585cb0aff81fd46da1bcf8be100",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "52 ratings",
                                  ratingCountV2: "52",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60597411",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649055",
                              name: "Tiramisu Jar",
                              category: "Jar",
                              description:
                                "Deep Satisfying Layers Of Sponge With Just The Right Amount Of Coffee And Chocolate Drizzles",
                              imageId: "1afb1ba4b1e22e5f0cd9cb691b67ed9d",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "59 ratings",
                                  ratingCountV2: "59",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104189",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649047",
                              name: "Nutella Baked Cheesecake Jar",
                              category: "Jar",
                              description:
                                "Drooolllllll - The Only Emotion  Nutella Based Cheesecakes Create",
                              imageId: "a07792b7921a379366a31b426aacf212",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60654125",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649046",
                              name: "New York Cheesecake Jar",
                              category: "Jar",
                              description:
                                "No-Frills Here! Pick This Jar For Its Unique Texture And Flavours",
                              imageId: "93285936db3ac99858acf09d711a9fdc",
                              inStock: 1,
                              isVeg: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "33 ratings",
                                  ratingCountV2: "33",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587818",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649054",
                              name: "Strawberry Baked Cheesecake Jar",
                              category: "Jar",
                              description:
                                "Fresh, Tangy, Sweet, Moist, Authentic - A Punch Of Flavours Await You Here",
                              imageId: "7ae6f59085f775974719b72cff168d7d",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104185",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "169758835",
                              name: "Kitkat Baked Cheesecake Jar",
                              category: "Jar",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/9a136516-a7c6-4b4d-99d1-e3d6aeb16087_d458859b-8a9a-41db-ad11-cd6291c6809c.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "102410399",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649050",
                              name: "Pineapple Baked Cheesecake Jar",
                              category: "Jar",
                              imageId: "73e45419e3e56d52474ff74b08cde251",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "66618411",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649041",
                              name: "Chocolate Tiramisu Jar",
                              category: "Jar",
                              description:
                                "Our Tiramisu Just Got Tastier With A Splash Of Chocolate. No Trick Only Treat!",
                              imageId: "6218ea2e54d29d27112b3752f636baf3",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "22 ratings",
                                  ratingCountV2: "22",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60162850",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649035",
                              name: "Belgian Chocolate Mousse Jar",
                              category: "Jar",
                              description:
                                "Classic, Earthy Flavours Welcome You In This Oh So Yum! Mousse Jar",
                              imageId: "633660b90e4dd739107893bb59b1a6e9",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104123",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "153176551",
                              name: "Salted Caramel Cheesecake Jar",
                              category: "Jar",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/22/a36ecc9a-20b0-4522-b6d3-86612aaca051_031db810-4ac9-4013-8a93-bd4f633bfbc7.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "91167550",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649043",
                              name: "Gourmet Chocolate Truffle Jar",
                              category: "Jar",
                              description:
                                "Dig Into Rich Truffle Flavours To Satisfy Your Child-Like Cravings For All Things Chocolate",
                              imageId: "a57e87a8eb092592b7561f717fd01277",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104150",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649049",
                              name: "Nutella Mousse Jar",
                              category: "Jar",
                              description:
                                "Happiness Is Only A Nutella Mousse Jar Away",
                              imageId: "09d31dcf57eb294ae34c6337d18476ae",
                              inStock: 1,
                              isVeg: 1,
                              price: 32000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104170",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649042",
                              name: "German Black Forest Jar",
                              category: "Jar",
                              description:
                                "A Century Old Dessert From Germany Loaded With Sour Cherries To Make You Jiggle Wiggle",
                              imageId: "44bdfdd8a066e108dcab8a38ed357a25",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587813",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649038",
                              name: "Brownie Sundae Jar",
                              category: "Jar",
                              description:
                                "An Innovation Only To Surprise Your Tongue, Taste Buds And Tummy",
                              imageId: "3e8c0e12e8ec7e90fba10c1982635cfc",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "63005019",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649053",
                              name: "Red Velvet Cake Jar",
                              category: "Jar",
                              description:
                                "Presenting The Spongy Red Velvet Cake To Instantly Pick Up Your Mood",
                              imageId: "14d928b3a4ae61226a2d3a63b85e00fb",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104182",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649056",
                              name: "Triple Chocolate Mousse Jar",
                              category: "Jar",
                              description:
                                "No Amount Of Chocolate Is Ever Enough! This Jar Proudly Backs This Truth.",
                              imageId: "525a9733e1238d0e591230690f552586",
                              inStock: 1,
                              isVeg: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60699821",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649045",
                              name: "Mix Berry Jar",
                              category: "Jar",
                              description:
                                "A Mix That Promises Your Sweet-Tooth A Fix! Go For It",
                              imageId: "a529e80d9eb06dbfa5505b877519b73e",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587816",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649052",
                              name: "Rainbow Jar",
                              category: "Jar",
                              description:
                                "Who Doesn'T Love Layers Of Moist, Colourful, Edible Goodness?",
                              imageId: "228c13aa2aa91be083d80c3e5379e3b0",
                              inStock: 1,
                              isVeg: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587825",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649051",
                              name: "Pineapple Jar",
                              category: "Jar",
                              description:
                                "The Sweet, Tarty Pineapple Just Found Its Way To Our Jar",
                              imageId: "3aa3b20f49b0ad71ad79ccff702c6424",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587823",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "b02e34f9b87c8d3fa1e59d159d810a2c",
                      categoryId: "42312711",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Brownies",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649097",
                              name: "Assorted Brownies Box(4 No)",
                              category: "Brownies",
                              description:
                                "The Brownie Is In Your Court! Pick Your Top 4",
                              imageId: "ddf5c45a97bf76b1c0bb6736207f44e0",
                              inStock: 1,
                              isVeg: 1,
                              price: 70000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65587807",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649098",
                              name: "Chocolate Fudge Brownie",
                              category: "Brownies",
                              description:
                                "Yum! Yum! Yum! & Some More Yum! Yum!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/3a424766-2f67-41df-898b-fbc44557b58f_836cb160-0d6d-459b-b600-226fa0bcfc17.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 11900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "31 ratings",
                                  ratingCountV2: "31",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104138",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649099",
                              name: "Classic Brownie",
                              category: "Brownies",
                              description:
                                "You Asked For A Classic Brownie. We Delivered.",
                              imageId: "2d33a07bb0dfb9a8e60b6be2db5a2849",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "34 ratings",
                                  ratingCountV2: "34",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104142",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649103",
                              name: "Nutella Brownie",
                              category: "Brownies",
                              description:
                                "Wherever You Go, Our Nutella Brownie Follows",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/27ba591a-5dc9-4e2d-84a5-e73ec7d65da9_20d20bf4-ceaf-482a-b698-80da45757672.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104164",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649101",
                              name: "Lotus Biscoff Brownie",
                              category: "Brownies",
                              description:
                                "Crunchy, Distinctive Experiences Await You Here!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/e49ec9ad-062b-432f-8ecd-b11d32f17f29_da95c44f-4716-4ced-af85-c4d745f1dcf5.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60162855",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649100",
                              name: "Kit-kat Brownie",
                              category: "Brownies",
                              description:
                                "Breaks Are Good! Whoever Said So Was Sooooo Right.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/22/b31bebc8-5432-4dca-8a89-3f195afc8d06_f2799f85-ada7-47ba-8868-ebb4a5b59e81.png",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60162853",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649102",
                              name: "Milk Chocolate Brownie",
                              category: "Brownies",
                              description:
                                "This One'S On The Menu For A Reason. The Reason Is You",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/e81991b1-f6e6-464c-80e9-7559ef8b3840_19b2e666-287d-4e7c-a3db-875c5c9a8a74.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60215949",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127649105",
                              name: "White Chocolate Brownie",
                              category: "Brownies",
                              description:
                                "Ditching The Usual With A Dash Of White Chocolate",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/25/ab5cbb99-f376-49c1-8910-45c92a68c885_aa35db88-bd78-4784-962d-29fd7a43dfa2.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "60104192",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "ddf5c45a97bf76b1c0bb6736207f44e0",
                      categoryId: "42312714",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Hampers",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "184811459",
                              name: "Pack Of 2 Blueberry Baked Cheesecake Jar",
                              category: "Hampers",
                              description: "2 blueberry Baked cheesecake jars",
                              inStock: 1,
                              isVeg: 1,
                              price: 56000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "112295356",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "184811460",
                              name: "Pack Of 2 Brownie Baked cheesecake jar",
                              category: "Hampers",
                              description: "2 brownie baked cheesecake jars",
                              inStock: 1,
                              isVeg: 1,
                              price: 56000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "112295357",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "54504578",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 11223331001571"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Cheesecake & Co.",
                      area: "Nagavara & Hennur",
                      completeAddress:
                        "No.81, Ground Floor, 4th Cross, Akashvani  Layout, Near Chowdeshwari Temple,  Dasarahalli, Bengaluru, Yelahanka, B.B.M.P  North, Karnataka-560024",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
};

export default mockData;
