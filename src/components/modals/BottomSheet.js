import React, {Component} from 'react';
import {View, Modal, TouchableOpacity, Animated, PanResponder, StyleSheet} from 'react-native';
class BottomSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            animatedHeight: new Animated.Value(props.height),
            pan: new Animated.ValueXY(),
        };

        this.createPanResponder(props);
    }

    setModalVisible(visible) {
        const {closeFunction, height} = this.props;
        const {animatedHeight, pan} = this.state;
        if (visible) {
            this.setState({modalVisible: visible});
            Animated.timing(animatedHeight, {
                toValue: height,
                duration: 300,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(animatedHeight, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false,
            }).start(() => {
                pan.setValue({x: 0, y: 0});
                this.setState({
                    modalVisible: visible,
                    animatedHeight: new Animated.Value(0),
                });
                if (typeof closeFunction === 'function') {
                    closeFunction();
                }
            });
        }
    }

    createPanResponder(props) {
        const {height} = props;
        const {pan} = this.state;
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) => {
                if (gestureState.dy > 0) {
                    Animated.event([null, {dy: pan.y}, {useNativeDriver: false}])(e, gestureState);
                }
            },
            onPanResponderRelease: () => {
                Animated.spring(pan, {
                    toValue: {x: 0, y: 0},
                    useNativeDriver: false,
                }).start();
            },
        });
    }

    show() {
        if (typeof this.props.onShow === 'function') {
            this.props.onShow();
        }
        this.setModalVisible(true);
    }

    close() {
        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
        this.setModalVisible(false);
    }

    render() {
        const {children, hasDraggableIcon, backgroundColor, dragIconColor} = this.props;
        const {animatedHeight, pan, modalVisible} = this.state;
        const panStyle = {
            transform: pan.getTranslateTransform(),
        };

        return (
            <Modal transparent visible={modalVisible}>
                <View style={[styles.wrapper, {backgroundColor: backgroundColor || '#25252599'}]}>
                    <TouchableOpacity style={styles.background} activeOpacity={1} />
                    <Animated.View style={[panStyle, styles.container]}>
                        {hasDraggableIcon && (
                            <View style={styles.draggableContainer}>
                                <View
                                    style={[
                                        styles.draggableIcon,
                                        {
                                            backgroundColor: dragIconColor || '#A3A3A3',
                                        },
                                    ]}
                                />
                            </View>
                        )}
                        {children}
                    </Animated.View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    background: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '92%',
        overflow: 'hidden',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingTop: 10,
    },
    draggableContainer: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    draggableIcon: {
        width: 40,
        height: 6,
        borderRadius: 3,
        margin: 10,
        marginBottom: 0,
    },
});
export default BottomSheet;
