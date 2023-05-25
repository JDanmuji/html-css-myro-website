"use strict";//JS용 언어팩
var i18nSvc={},i18n={};i18nSvc.get=function(keyword){return i18n.dictionary[keyword][lang]},i18n.dictionary={closePannel:{ko:"\uAC80\uC0C9\uCC3D \uB2EB\uAE30",en:"close pannel"},openPannel:{ko:"\uAC80\uC0C9\uCC3D \uC5F4\uAE30",en:"open pannel"},weekDays:{ko:["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],en:["SUN","MON","TUE","WED","THU","FRI","SAT"]},recommendedHotels:{ko:"\uCD94\uCC9C\uD638\uD154",en:"recommended hotels"},recommendedSpots:{ko:"\uCD94\uCC9C\uC7A5\uC18C",en:"recommended spots"},searchedResult:{ko:"\uAC80\uC0C9\uACB0\uACFC",en:"searched result"},moreThanTwoLettersForSearchingKeyword:{ko:"\uAC80\uC0C9\uC5B4\uB294 \uB450 \uAE00\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694",en:"searching keyword should be longer than two letters"},moreThan15Results:{ko:"\uAC80\uC0C9 \uACB0\uACFC\uAC00 15\uAC74\uC744 \uCD08\uACFC\uD558\uC5EC \uC0C1\uC704 15\uAC74\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4.<br> \uC815\uD655\uD55C \uAC80\uC0C9\uC744 \uC704\uD574 \uAC80\uC0C9\uC5B4\uB97C \uB354\uC6B1 \uAD6C\uCCB4\uC801\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",en:"There are more than 15 results, so you can see only 15 results.<br> Please, specify your keyword."},noSearchResult:{ko:"\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",en:"There is no search result"},resultCnt:{ko:"\uAC74",en:""},restaurant:{ko:"\uC2DD\uB2F9",en:"restaurant"},spot:{ko:"\uC7A5\uC18C",en:"spot"},hotel:{ko:"\uD638\uD154",en:"hotel"},selectPlace:{ko:"\uC120\uD0DD\uBAA9\uB85D \uC7A5\uC18C\uC5D0 \uCD94\uAC00",en:"select Place"},searchAtGoogle:{ko:"\uAD6C\uAE00\uC5D0\uC11C \uAC80\uC0C9",en:"search at google"},placeName:{ko:"\uC7A5\uC18C\uBA85",en:"place name"},address:{ko:"\uC8FC\uC18C",en:"address"},addPlace:{ko:"\uC7A5\uC18C\uCD94\uAC00",en:"add place"},addSpotToOmittedPlaces:{ko:"\uD3EC\uD568\uB418\uC9C0 \uC54A\uC740 \uC7A5\uC18C\uC5D0 \uCD94\uAC00",en:"add place to omitted place list"},selectHotel:{ko:"\uC120\uD0DD\uBAA9\uB85D \uD638\uD154\uC5D0 \uCD94\uAC00",en:"select hotel"},checkStayingDate:{ko:"\uC219\uBC15 \uC77C\uC790\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694",en:"check your staying date"},setYourTravelDate:{ko:"\uC5EC\uD589 \uC77C\uC218\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",en:"set your travel date"},cantChooseMoreThan8PlacesPerDayForAverage:{ko:"\uD558\uB8E8\uB2F9 \uD3C9\uADE0 8\uC7A5\uC18C \uC774\uC0C1 \uC120\uD0DD \uBD88\uAC00",en:"you can't choose more than 8 places for average per day"},isAlreadySelected:{ko:"\uC740(\uB294) \uC774\uBBF8 \uC120\uD0DD\uD558\uC2E0 \uC7A5\uC18C\uC785\uB2C8\uB2E4.",en:"is already selected"},sumOfStayingTimeOfPlacesCannotBeGreaterThanTotalTravelTime:{ko:"\uC5EC\uD589 \uCD1D \uC2DC\uAC04\uBCF4\uB2E4 \uC7A5\uC18C\uC5D0\uC11C\uC758 \uCD1D \uC18C\uC694\uC2DC\uAC04\uC774 \uD074 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",en:"sum of staying time of all places can't be greater than your total travel time"},stayingTime:{ko:"\uBA38\uBB34\uB294 \uC2DC\uAC04",en:"staying time"},removeFromSelectedList:{ko:"\uBAA9\uB85D\uC5D0\uC11C \uC0AD\uC81C",en:"remove from selected list"},hours:{ko:"\uC2DC\uAC04",en:"hour"},min:{ko:"\uBD84",en:"min"},youShouldSelectHotel:{ko:"\uD638\uD154\uC744 \uC120\uD0DD\uD558\uC154\uC57C \uD569\uB2C8\uB2E4",en:"please, select your hotel"},travelDayShouldBeGreaterThanSelectedPlaces:{ko:"\uC5EC\uD589 \uC77C\uC218\uBCF4\uB2E4 \uC7A5\uC18C \uC218\uAC00 \uC801\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",en:"travel day should be greater than selected places"},planModifed:{ko:"\uC77C\uC815\uC774 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4",en:"your plan has been modified"},planModificationCanceld:{ko:"\uC77C\uC815 \uC218\uC815\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4",en:"your modification is canceld"},notIncludedPlaces:{ko:"\uD3EC\uD568\uB418\uC9C0 \uC54A\uC740 \uC7A5\uC18C",en:"not included places"},placesOutOfPlanIsHere:{ko:"\uC77C\uC815\uC5D0\uC11C \uB204\uB77D\uB41C \uC7A5\uC18C\uB4E4\uC774 \uC774\uACF3\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4.",en:"places not included in the plan are here"},youCanDragYourPlacesHere:{ko:"\uC77C\uC815\uC5D0 \uD3EC\uD568\uB41C \uC7A5\uC18C\uB97C \uC62E\uACA8 \uB193\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.",en:"you can move places included in the plan here too"},dragPlacesAndMoveToWhereYouWant:{ko:"\uC6D0\uD558\uB294 \uC704\uCE58\uC5D0 \uB4DC\uB798\uADF8\uD558\uC5EC \uC77C\uC815\uC5D0 \uD3EC\uD568\uC2DC\uD0A4\uC138\uC694",en:"drag and drop the places where you want"},monthList:{ko:["","1\uC6D4","2\uC6D4","3\uC6D4","4\uC6D4","5\uC6D4","6\uC6D4","7\uC6D4","8\uC6D4","9\uC6D4","10\uC6D4","11\uC6D4","12\uC6D4"],en:["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},whatDay:{ko:"\uC77C",en:"th"},canChangeDay:{ko:"\uC77C\uCC28\uB97C \uB204\uB974\uBA74 \uC77C\uC815 \uC804\uCCB4 \uBCC0\uACBD\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",en:"you can change the whole day with another"},depart:{ko:"\uCD9C\uBC1C",en:"depart"},closed:{ko:"\uD734\uBB34",en:"closed"},duration:{ko:"\uC18C\uC694\uC2DC\uAC04",en:"duration"},start:{ko:"\uC2DC\uC791",en:"start"},end:{ko:"\uC885\uB8CC",en:"end"},timeTable:{ko:"\uC2DC\uAC04\uD45C",en:"time table"},openHours:{ko:"\uC601\uC5C5\uC2DC\uAC04",en:"open hours"},clickAndDrag:{ko:"\uD074\uB9AD\uD558\uC5EC \uC774\uB3D9",en:"click and drag"},canPutShortMemo:{ko:"(\uCD5C\uB300 100\uC790)",en:"you can put a short memo"},scheduleProblem:{ko:"\uC77C\uC815\uC5D0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uBE68\uAC04\uC0C9\uC73C\uB85C \uD45C\uC2DC\uB41C \uC2DC\uAC04\uD45C\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694",en:"some problem on your schedule. check the red time table"},sureToRemove:{ko:"\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? ",en:"are you sure to remove?"},atLeastOnePlace:{ko:"\uD558\uB8E8\uC5D0 \uCD5C\uC18C\uD55C \uD55C\uAC1C\uC758 \uC77C\uC815\uC774 \uD544\uC694\uD569\uB2C8\uB2E4",en:"need at least one place per day"},waitCreatingTravelPlan:{ko:"\uB9C8\uC774\uB85C\uAC00 \uC138\uC0C1\uC5D0 \uC5C6\uB358 \uB2F9\uC2E0\uB9CC\uC758 \uC5EC\uD589 \uC77C\uC815\uC744 \uC0DD\uC131\uC911\uC785\uB2C8\uB2E4. \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694",en:"MYRO is creating an unique travel plan for you. Please wait a moment"},failToMakePlan:{ko:"\uC77C\uC815 \uC0DD\uC131 \uC2E4\uD328",en:"fail to make plan"},route:{ko:"\uC0C1\uC138\uACBD\uB85C",en:"route"},estimatedDuration:{ko:"\uC608\uC0C1 \uC18C\uC694\uC2DC\uAC04",en:"estimated duration"},cantFindRouteOnGoogleMap:{ko:"\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uAD6C\uAE00\uC9C0\uB3C4\uC5D0\uC11C \uD574\uB2F9 \uC7A5\uC18C\uAC04 \uACBD\uB85C\uB97C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4",en:"sorry. google map doesn't provide the route"},day:{ko:"DAY",en:"DAY"},month:{ko:"\uC6D4",en:"month"},wrongEmailFormat:{ko:"\uC798\uBABB\uB41C \uBA54\uC77C \uD615\uC2DD\uC785\uB2C8\uB2E4",en:"wring email format"},atLeastOneEmail:{ko:"\uC774\uBA54\uC77C\uC744 \uCD5C\uC18C\uD55C \uD55C\uAC1C \uC785\uB825\uD558\uC138\uC694",en:"please insert one email at least "},modifiedScheduleSaved:{ko:"\uC218\uC815\uB41C \uC77C\uC815\uC774 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4",en:"your modification has been applied"},maximumTenEmail:{ko:"Email\uC740 \uD55C\uBC88\uC5D0 \uCD5C\uB300 10\uAC1C\uAE4C\uC9C0 \uBC1C\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",en:"you can send maximum 10 email at once"},registerPlaceIfNotExists:{ko:"\uCC3E\uC73C\uC2DC\uB294 \uC7A5\uC18C\uAC00 \uC5C6\uC73C\uBA74 \uC7A5\uC18C\uB4F1\uB85D\uC694\uCCAD\uC744 \uD574\uC8FC\uC138\uC694",en:"if the place you are searching doesn't exist, please add the place"},googleDoesntProvideGooglemapTransitMode:{ko:"\uC774 \uB3C4\uC2DC\uC5D0\uC11C google \uB300\uC911\uAD50\uD1B5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",en:"google map doens't provide google map transit mode in this city"},googleDoesntProvideGooglemapDrivingMode:{ko:"\uC774 \uB3C4\uC2DC\uC5D0\uC11C google driving\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",en:"google map doens't provide google map driving mode in this city"},noMoreThanTenTravelDays:{ko:"\uC5EC\uD589\uC77C\uC790\uB294 10\uC77C\uC744 \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",en:"travel day can not be more than ten days"},clickHereAndResizeAsYouWant:{ko:"\uB9C8\uC6B0\uC2A4\uB97C \uB204\uB978\uCC44\uB85C \uB4DC\uB798\uADF8\uD558\uC5EC \uB113\uC774\uB97C \uC790\uC720\uB86D\uAC8C \uC870\uC808\uD558\uC138\uC694.",en:"click here and resize as you want"},insertYourFeedback:{ko:"\uD53C\uB4DC\uBC31\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",en:"insert your feedback"},failToPostFeedback:{ko:"\uD53C\uB4DC\uBC31 \uC804\uC1A1 \uC2E4\uD328",en:"fail to post feedback"},searchPlacePlease:{ko:"\uC7A5\uC18C\uB97C \uAC80\uC0C9\uD558\uC138\uC694",en:"search place please"},searchHotelPlease:{ko:"\uD638\uD154\uC744 \uAC80\uC0C9\uD558\uC138\uC694",en:"search hotel please"},guideForRecommendedCourse:{ko:"\uC544\uB798 \uBAA9\uB85D\uC758 \uC7A5\uC18C\uB4E4\uC744 \uD074\uB9AD\uD558\uC5EC \uAC1C\uBCC4 \uC120\uD0DD\uC774 \uAC00\uB2A5\uD558\uACE0 \uC6B0\uCE21 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC804\uCCB4 \uC120\uD0DD\uB429\uB2C8\uB2E4.",en:"you can select each place or click the right button to select all"},selectAll:{ko:"\uC804\uCCB4 \uC120\uD0DD",en:"select all"},moreRecommendedCourseComingSoon:{ko:"\uB354\uC6B1 \uB2E4\uC591\uD55C \uCD94\uCC9C\uC77C\uC815\uC744 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.",en:"variable recommend course coming soon..."},selectDateAndChooseHotel:{ko:"\uC77C\uC790 \uBC84\uD2BC\uC744 \uB204\uB974\uACE0 \uD638\uD154\uC744 \uCD94\uAC00\uD558\uC138\uC694.",en:"select the date and choose your hotel"},sendUsYourFeedback:{ko:"\uC774 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC11C \uC800\uD76C\uC5D0\uAC8C \uD53C\uB4DC\uBC31\uC744 \uBCF4\uB0B4\uC8FC\uC138\uC694!",en:"send us your feedback please"},doYouHaveSomeProblems:{ko:"\uC0AC\uC6A9\uC774 \uBD88\uD3B8\uD558\uC2E0\uAC00\uC694?",en:"have problems?"},insertPlaceName:{ko:"\uC7A5\uC18C\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",en:"insert place name please"},registerThisPlace:{ko:"\uC120\uD0DD\uC7A5\uC18C\uB4F1\uB85D",en:"register this place"},watchInGoogleMap:{ko:"\uAD6C\uAE00\uB9F5\uC5D0\uC11C\uBCF4\uAE30",en:"watch in google map"},placeRegisterComplete:{ko:"\uC7A5\uC18C\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uAC80\uC0C9\uCC3D\uC5D0\uC11C \uAC80\uC0C9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4",en:"the place has been registered. you can now search it"},placeRegisterError:{ko:"\uC7A5\uC18C\uB4F1\uB85D\uC5D0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD574\uC8FC\uC138\uC694",en:"there is an error registering place. please contact to administrator"},whenClickSendPlan:{ko:"\uC774\uBA54\uC77C \uC804\uC1A1\uC744 \uD558\uC9C0 \uC54A\uC73C\uBA74 \uB9CC\uB4E4\uC5B4\uC9C4 \uC77C\uC815\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uBA54\uC77C\uB85C \uC77C\uC815\uC744 \uC804\uC1A1\uD558\uBA74 \uC5EC\uD589\uC9C0\uC5D0\uC11C \uD3B8\uD558\uAC8C \uC0AC\uC6A9\uD558\uC2E4 \uC218 \uC788\uB294 \uBAA8\uBC14\uC77C \uC804\uC6A9 \uD398\uC774\uC9C0\uB97C \uBCF4\uB0B4\uB4DC\uB9AC\uBA70, \uC5B8\uC81C\uB4E0 <b>\uC218\uC815\uC774 \uAC00\uB2A5</b>\uD569\uB2C8\uB2E4.",en:"If you don't send the plan to your email, the plan will not be saved. You will get an awsome mobile page that you can use during you travel, and also always can modify your plan."},whenSelectedHotel:{ko:"\uC77C\uCC28 \uD638\uD154\uC744 \uC120\uD0DD\uD558\uC168\uC2B5\uB2C8\uB2E4.",en:"Day hotel selected"},thanksForHelpUs:{ko:"\uC18C\uC911\uD55C \uC124\uBB38\uC5D0 \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.",en:"we appreciate for your help"},noNeedToSelectAirport:{ko:"\uACF5\uD56D\uC740 \uC77C\uC815 \uC0DD\uC131 \uC2DC \uC790\uB3D9\uC73C\uB85C \uC77C\uC815\uC758 \uCC98\uC74C\uACFC \uB9C8\uC9C0\uB9C9\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4.",en:"the airport set automatically at the start and end of your itinerary"},hotelInfo:{ko:"\uD638\uD154 \uC815\uBCF4",en:"hotel info"},spotInfo:{ko:"\uC7A5\uC18C \uC815\uBCF4",en:"spot info"},reviewModalForLogin:{ko:"\uB85C\uADF8\uC778\uC744 \uD558\uC154\uC57C \uB9AC\uBDF0\uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.<br>\uB85C\uADF8\uC778\uC744 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",en:"You should login for writing review.<br>Would you like to login?"},updateReviewModalForLogin:{ko:"\uB85C\uADF8\uC778\uC744 \uD558\uC154\uC57C \uB9AC\uBDF0\uC218\uC815\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.<br>\uB85C\uADF8\uC778\uC744 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",en:"You should login for updatting review.<br>Would you like to login?"},deleteReviewModalForLogin:{ko:"\uB85C\uADF8\uC778\uC744 \uD558\uC154\uC57C \uB9AC\uBDF0\uC0AD\uC81C\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4.<br>\uB85C\uADF8\uC778\uC744 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",en:"You should login for delete review.<br>Would you like to login?"},shouldWriteReviewModal:{ko:"\uAE00\uC790\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",en:"Input any text before submit."},deleteReviewModal:{ko:"\uB9AC\uBDF0\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",en:"Are you sure you want to delete a review?"},reviewLikeOrDislikeModal:{ko:"\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB97C \uD558\uC2DC\uB824\uBA74 \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.",en:"Are you sure you want to delete a review?"},loginBeforeDeclareReviewModal:{ko:"\uC2E0\uACE0\uB97C \uD558\uC2DC\uB824\uBA74 \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.",en:"You need to login for report."},declareReviewModal:{ko:"\uC815\uB9D0 \uC2E0\uACE0\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",en:"Are you sure you want to report?"},finishDeclareModal:{ko:"\uC2E0\uACE0\uAC00 \uC644\uB8CC\uB410\uC2B5\uB2C8\uB2E4.",en:"Report complete."}};