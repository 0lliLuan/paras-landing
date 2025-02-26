import create from 'zustand'

const useStore = create((set, get) => ({
	currentUser: null,
	setCurrentUser: (user) => set(() => ({ currentUser: user })),
	initialized: false,
	setInitialized: (val) => set(() => ({ initialized: val })),
	marketScrollPersist: {},
	marketDataPersist: {},
	setMarketScrollPersist: (key, val) =>
		set(() => {
			const newMarket = {
				...get().marketScrollPersist,
				...{ [key]: val },
			}
			return {
				marketScrollPersist: newMarket,
			}
		}),
	setMarketDataPersist: (key, val) =>
		set(() => {
			const newMarket = {
				...get().marketDataPersist,
				...{ [key]: val },
			}
			return {
				marketDataPersist: newMarket,
			}
		}),
	usersPublicationList: {},
	setUsersPublicationList: (key, val) =>
		set(() => {
			const newUsersPublicationList = {
				...get().usersPublicationList,
				...{ [key]: val },
			}
			return {
				usersPublicationList: newUsersPublicationList,
			}
		}),
	usersPublicationMeta: {},
	setUsersPublicationMeta: (key, val) =>
		set(() => {
			const newUsersPublicationMeta = {
				...get().setUsersPublicationMeta,
				...{ [key]: val },
			}
			return {
				usersPublicationMeta: newUsersPublicationMeta,
			}
		}),
	nearUsdPrice: 0,
	setNearUsdPrice: (val) => set(() => ({ nearUsdPrice: val })),
	userBalance: {},
	setUserBalance: (val) => set(() => ({ userBalance: val })),
	userProfile: {},
	setUserProfile: (val) => set(() => ({ userProfile: val })),
	activityList: [],
	setActivityList: (val) => set(() => ({ activityList: val })),
	activityListPage: 0,
	setActivityListPage: (val) => set(() => ({ activityListPage: val })),
	activityListHasMore: true,
	setActivityListHasMore: (val) => set(() => ({ activityListHasMore: val })),
	notificationList: [],
	setNotificationList: (val) => set(() => ({ notificationList: val })),
	notificationUnreadList: [],
	setNotificationUnreadList: (val) => set(() => ({ notificationUnreadList: val })),
	notificationListPage: 0,
	setNotificationListPage: (val) => set(() => ({ notificationListPage: val })),
	notificationListHasMore: true,
	setNotificationListHasMore: (val) => set(() => ({ notificationListHasMore: val })),
	showEmailWarning: false,
	setShowEmailWarning: (val) => set(() => ({ showEmailWarning: val })),
	// publication page
	pubList: [],
	setPubList: (val) => set(() => ({ pubList: val })),
	pubListPage: 0,
	setPubListPage: (val) => set(() => ({ pubListPage: val })),
	pubListHasMore: true,
	setPubListHasMore: (val) => set(() => ({ pubListHasMore: val })),
	// publication page type=editorial
	pubListEditorial: [],
	setPubListEditorial: (val) => set(() => ({ pubListEditorial: val })),
	pubListEditorialPage: 0,
	setPubListEditorialPage: (val) => set(() => ({ pubListEditorialPage: val })),
	pubListEditorialHasMore: true,
	setPubListEditorialHasMore: (val) => set(() => ({ pubListEditorialHasMore: val })),
	// publication page type=community
	pubListCommunity: [],
	setPubListCommunity: (val) => set(() => ({ pubListCommunity: val })),
	pubListCommunityPage: 0,
	setPubListCommunityPage: (val) => set(() => ({ pubListCommunityPage: val })),
	pubListCommunityHasMore: true,
	setPubListCommunityHasMore: (val) => set(() => ({ pubListCommunityHasMore: val })),

	cardCategory: [],
	setCardCategory: (category) => set(() => ({ cardCategory: category })),
	categoryCardList: {},
	setCategoryCardList: (cardList) => set(() => ({ categoryCardList: cardList })),
	pageCategoryCardList: {},
	setPageCategoryCardList: (pageCategory) => set(() => ({ pageCategoryCardList: pageCategory })),
	hasMoreCategoryCard: {},
	setHasMoreCategoryCard: (hasMoreCategory) =>
		set(() => ({ hasMoreCategoryCard: hasMoreCategory })),
}))

export default useStore
