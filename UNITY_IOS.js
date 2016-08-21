BUG FIX:
1. 
http://www.ymonke.com/?author=1    //extern c issue
#ifdef __cplusplus
extern "C" {
#endif
    void AddViewControllerRotationHandling(Class class_, IMP willRotateToInterfaceOrientation, IMP didRotateFromInterfaceOrientation, IMP viewWillTransitionToSize);
#ifdef __cplusplus
}
#endif

#ifdef __cplusplus
extern "C" {
#endif
    void AddViewControllerDefaultRotationHandling(Class class_);
#ifdef __cplusplus
}
#endif
http://forum.unity3d.com/threads/unity-appcontroller-subclassing.191971/page-3   // deprecated method issue

2. integrate unity to ios project;
https://the-nerd.be/2015/08/20/a-better-way-to-integrate-unity3d-within-a-native-ios-application/
http://docs.unity3d.com/Manual/PluginsForIOS.html
https://the-nerd.be/2014/08/06/add-unity3d-in-a-native-ios-application/

https://vimeo.com/136835530
https://the-nerd.be/2015/11/13/integrate-unity-5-in-a-native-ios-app-with-xcode-7/
https://github.com/keyv/iOSUnityVuforiaGuide
https://github.com/blitzagency/ios-unity5

http://www.jianshu.com/p/af6f8260a811