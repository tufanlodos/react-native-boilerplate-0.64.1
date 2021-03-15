import { Platform, StyleSheet } from "react-native";
import Colors from "../assets/data/color-list";
import { ENV } from "./configurations";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../lib/responsive";

const styles = StyleSheet.create({
  f0: {
    flex: 0
  },
  f1: {
    flex: 1
  },
  f2: {
    flex: 2
  },
  f3: {
    flex: 3
  },
  f4: {
    flex: 4
  },
  f5: {
    flex: 5
  },
  f6: {
    flex: 6
  },
  f7: {
    flex: 7
  },
  f8: {
    flex: 8
  },
  f9: {
    flex: 9
  },
  f10: {
    flex: 10
  },
  f12: {
    flex: 12
  },
  fdRow: {
    flexDirection: "row"
  },
  fdCol: {
    flexDirection: "column"
  },
  fdColReverse: {
    flexDirection: "column-reverse"
  },
  bgWhite: {
    backgroundColor: Colors.white
  },
  bgBright: {
    backgroundColor: Colors.bright
  },
  bgBrighter: {
    backgroundColor: Colors.brighter
  },
  bgSuccess: {
    backgroundColor: Colors.green
  },
  bgPrimary: {
    backgroundColor: Colors.primary
  },
  bgWarning: {
    backgroundColor: Colors.yellow
  },
  bgDanger: {
    backgroundColor: Colors.red
  },
  bgTransparent: {
    backgroundColor: Colors.transparent
  },
  textWhite: {
    color: Colors.white
  },
  textPrimary: {
    color: Colors.primary
  },
  textPrimaryLight: {
    color: Colors.primaryLight
  },
  textGrey: {
    color: Colors.grey
  },
  textGreyDark: {
    color: Colors.greyDark
  },
  textGreyLight: {
    color: Colors.lightGrey
  },
  textSuccess: {
    color: Colors.green
  },
  textSecondary: {
    color: Colors.secondary
  },
  textSecondaryDark: {
    color: Colors.secondaryDark
  },
  textDanger: {
    color: Colors.red
  },
  textBright: {
    color: Colors.bright
  },
  textBrightGrey: {
    color: Colors.brightGrey
  },
  textYellow: {
    color: Colors.yellow
  },
  notFoundText: {
    textAlign: "center",
    color: Colors.grey
  },
  fwNormal: {
    fontWeight: "normal"
  },
  fwBold: {
    fontWeight: "bold"
  },
  textSolidUnderline: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline"
  },
  fwSemiBold: {
    fontWeight: "700"
  },
  w100pe: {
    width: "100%"
  },
  h100pe: {
    height: "100%"
  },
  w100vw: {
    width: wp("100")
  },
  h100vh: {
    height: hp("100")
  },
  hAuto: {
    height: "auto"
  },
  jcStart: {
    justifyContent: "flex-start"
  },
  jcCenter: {
    justifyContent: "center"
  },
  jcBtw: {
    justifyContent: "space-between"
  },
  jcEnd: {
    justifyContent: "flex-end"
  },
  algiCenter: {
    alignItems: "center"
  },
  algiStrech: {
    alignItems: "stretch"
  },
  algiStart: {
    alignItems: "flex-start"
  },
  algiEnd: {
    alignItems: "flex-end"
  },
  algsCenter: {
    alignSelf: "center"
  },
  algsEnd: {
    alignSelf: "flex-end"
  },
  algsStretch: {
    alignSelf: "stretch"
  },
  textCenter: {
    textAlign: "center"
  },
  textVerticalCenter: {
    textAlignVertical: "center"
  },
  textRight: {
    textAlign: "right"
  },
  textLeft: {
    textAlign: "left"
  },
  m0: {
    margin: 0
  },
  p0: {
    padding: 0
  },
  mb0: {
    marginBottom: 0
  },
  mt0: {
    marginTop: 0
  },
  mr0: {
    marginRight: 0
  },
  ml0: {
    marginLeft: 0
  },
  pb0: {
    paddingBottom: 0
  },
  pb5: { paddingBottom: 5 },
  pt0: {
    paddingTop: 0
  },

  pr0: {
    paddingRight: 0
  },
  pl0: {
    paddingLeft: 0
  },
  positionAbsolute: {
    position: "absolute"
  },
  positionRelative: {
    position: "relative"
  },
  headerContainerStyle: {
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 0
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "left",
    marginLeft: 10,
    color: Colors.secondaryDark
  },
  headerLeftSubTitleStyle: {
    marginTop: 10,
    paddingLeft: 30,
    fontWeight: "bold",
    color: Colors.secondaryDark
  },
  headerRightContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 20
  },
  screenDefaultPadding: {
    paddingVertical: 0,
    paddingHorizontal: ENV.isMobileSize ? wp("%1.2") : 20,
    marginTop: Platform.OS === "android" ? 20 : 0,
    paddingTop: ENV.hasNotch ? -25 : 0,
    paddingBottom: ENV.hasNotch ? -35 : 0
  },
  screenDefaultPaddingVertical: {
    paddingVertical: 10
  },
  screenDefaultPaddingHorizontal: {
    paddingHorizontal: ENV.isMobileSize ? 5 : 20
  },
  screenDefaultMargin: {
    marginVertical: 10,
    marginHorizontal: 20
  },
  questionCardDefault: {
    backgroundColor: Colors.white,
    borderRadius: 6,
    marginBottom: 15
  },
  questionCardDefaultHeaderContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.brightGrey
  },
  questionCardHeaderText: {
    flex: 1,
    color: Colors.secondary,
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 10
  },
  questionCardOperationButtonContainer: {
    width: 20,
    height: 20
  },
  questionCardDefaultBodyContainer: {
    padding: 25,
    flexDirection: "row"
  },
  button: {
    color: Colors.white,
    paddingVertical: 15,
    paddingHorizontal: wp("%7.5"),
    borderRadius: 6,
    marginVertical: 10
  },
  buttonRound: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  buttonPrimary: {
    backgroundColor: Colors.primary
  },
  primaryButtonText: {
    color: Colors.white,
    fontWeight: "700", // medium
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.41,
    textAlign: "center"
  },
  roundButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center"
  },
  buttonSecondary: {
    backgroundColor: Colors.secondary
  },
  buttonDanger: {
    backgroundColor: Colors.red
  },
  buttonLight: {
    backgroundColor: Colors.brightGrey
  },
  buttonWhite: {
    backgroundColor: Colors.white
  },
  lightButtonText: {
    color: Colors.primary,
    fontWeight: "bold", // bold
    fontSize: 12,
    textAlign: "center"
  },
  // eslint-disable-next-line react-native/no-color-literals
  inputPrimary: {
    backgroundColor: "transparent",
    color: Colors.secondaryDark,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    marginBottom: 10
  },
  inputSecondary: {
    backgroundColor: Colors.lightGrey,
    color: Colors.greyDark,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10
  },
  pickerContainerPrimary: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    paddingBottom: 10,
    marginBottom: 10,
    marginTop: 5
  },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    textAlign: "center",
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "bold",
    fontSize: 10.5,
    letterSpacing: -0.27,
    flexWrap: "nowrap"
  },
  badgeRec: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    borderRadius: 3,
    overflow: "hidden",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: -0.29,
    flexWrap: "nowrap"
  },
  taskTypeBadge: {
    width: 40,
    height: 40,
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 12,
    paddingHorizontal: 7,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.38
  },
  badgePrimary: {
    backgroundColor: Colors.primary,
    color: Colors.white
  },
  badgeDark: {
    backgroundColor: Colors.secondaryDark,
    color: Colors.white
  },
  badgeSuccess: {
    backgroundColor: Colors.green,
    color: Colors.white
  },
  badgeDanger: {
    backgroundColor: Colors.red,
    color: Colors.white
  },
  badgeWarning: {
    backgroundColor: Colors.yellow,
    color: Colors.white
  },
  shadowForWhite: {
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2
  },
  shadowForIcon: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1.3
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10
  },
  screenTabsContainer: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 5,
    backgroundColor: Colors.white
  },
  screenTabsButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingTop: 23,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.white
  },
  screenTabsActiveButtonContainer: {
    borderBottomColor: Colors.primary
  },
  screenTabsButtonText: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 13,
    color: Colors.secondary
  },
  basPrimaryButtonsHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 17,
    height: 50,
    backgroundColor: Colors.bright
  },
  basPrimaryButtonsHeaderTitleContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center"
  },
  basPrimaryButtonsHeaderTitleText: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.19,
    fontWeight: "700",
    color: Colors.grey
  },
  basPrimaryButtonsHeaderButtonText: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.39,
    fontWeight: "bold"
  },
  basPrimaryButtonsBodyContainer: {
    paddingHorizontal: 30
    // paddingLeft: 30
  },
  basPrimaryButtonsBodyButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20
  },
  basPrimaryButtonsBodyButtonSecondaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 14
  },
  basPrimaryButtonsBodyButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.secondary,
    flex: 1
  },
  screenTabsActiveButtonText: {
    color: Colors.primary
  },
  br6: {
    borderRadius: 6
  },
  br14: {
    borderRadius: 14
  },
  fs12: {
    fontSize: 12
  },
  fs13: {
    fontSize: 13
  },
  fs14: {
    fontSize: 14
  },
  fs16: {
    fontSize: 16
  },
  fs18: {
    fontSize: 18
  },
  fs20: {
    fontSize: 20
  },
  fs24: {
    fontSize: 24
  },

  fajCenterItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  mt5: {
    marginTop: 5
  },
  mt10: {
    marginTop: 10
  },
  mt20: {
    marginTop: 20
  },
  mb10: {
    marginBottom: 10
  },
  mb5: {
    marginBottom: 5
  },
  mr5: {
    marginRight: 5
  },
  mr10: {
    marginRight: 10
  },
  mr15: {
    marginRight: 15
  },
  ml10: {
    marginLeft: 10
  },
  ml15: {
    marginLeft: 15
  },
  mln5: {
    marginLeft: -5
  },
  mh10: {
    marginHorizontal: 10
  },
  mv10: {
    marginVertical: 10
  },
  mt30: {
    marginTop: 30
  },
  mb30: {
    marginBottom: 30
  },
  mb40: {
    marginBottom: 40
  },
  mr30: {
    marginRight: 30
  },
  ml30: {
    marginLeft: 30
  },
  ml20: {
    marginLeft: 20
  },
  mh30: {
    marginHorizontal: 30
  },
  mv30: {
    marginVertical: 30
  },
  pt10: {
    paddingTop: 10
  },
  pb10: {
    paddingBottom: 10
  },
  pr10: {
    paddingRight: 10
  },
  pl10: {
    paddingLeft: 10
  },
  ph0: {
    paddingHorizontal: 0
  },
  ph5: {
    paddingHorizontal: 5
  },
  ph10: {
    paddingHorizontal: 10
  },
  pv10: {
    paddingVertical: 10
  },
  pv15: {
    paddingVertical: 15
  },
  pv20: {
    paddingVertical: 20
  },
  pv5: {
    paddingVertical: 5
  },
  pt30: {
    paddingTop: 30
  },
  pb20: {
    paddingBottom: 20
  },
  pb30: {
    paddingBottom: 30
  },
  pb50: {
    paddingBottom: 50
  },
  pb70: {
    paddingBottom: 70
  },
  pr30: {
    paddingRight: 30
  },
  pl30: {
    paddingLeft: 30
  },
  ph30: {
    paddingHorizontal: 30
  },
  pv30: {
    paddingVertical: 30
  },
  zIndex1: {
    zIndex: 1
  },
  opacityHalf: {
    opacity: 0.5
  },
  opacityFull: {
    opacity: 1
  },
  hitSlop10: {
    top: 10,
    bottom: 10,
    right: 10,
    left: 10
  },
  hitSlop32: {
    top: 32,
    bottom: 32,
    right: 32,
    left: 32
  },
  maxwUnset: {
    maxWidth: wp("100")
  },
  selectLikeItem: {
    minWidth: 140,
    maxWidth: 140,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginRight: 10
  },
  selectLikeItemBorder: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightGrey
  },
  compactBodyContainerStyle: {
    maxHeight: ENV.QUESTION_INPUT_BASE_HEIGHT,
    maxWidth: wp("40"),
    marginRight: 0,
    marginLeft: 0
  },
  compactInputViewStyle: {
    minWidth: Platform.OS === "ios" && !ENV.isMobileSize ? wp("43") : wp("40"),
    maxWidth: wp("40")
  },
  defaultInputViewStyle: {
    minWidth: Platform.OS === "ios" && !ENV.isMobileSize ? wp("85") : wp("84"),
    maxWidth: wp("40")
  },
  compactSelectLikeViews: {
    minWidth: null,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    marginRight: 10
  },
  questionArrowBtn: {
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10
  },
  dottedRedUnderline: {
    height: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: Colors.red,
    borderStyle: "dotted"
  },
  noWrap: {
    flexWrap: "nowrap"
  },
  borderPrimary1: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5
  },
  borderSecondaryDark: {
    borderWidth: 1,
    borderColor: Colors.secondaryDark,
    borderRadius: 5
  },
  radioButtonStyle: {
    borderColor: Colors.primary,
    marginRight: 10
  },
  radioButtonSelectedStyle: {
    backgroundColor: Colors.primary
  },
  listViewMapContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    zIndex: 0
  },
  maxWidthLimitCompactViewInput: {
    maxWidth: wp("40")
  },
  maxWidthLimitDefaultViewInput: {}
});

export default styles;
