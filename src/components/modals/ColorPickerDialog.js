import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ColorPicker, toHsv} from 'react-native-color-picker';

export const ColorPickerDialog = props => {
    const dialogRef = useRef(null);
    const [color, setColor] = useState(toHsv('green'));
    const {open, onPress, setOpen} = props;

    useEffect(() => {
        if (open) {
            dialogRef.current.open();
        } else {
            dialogRef.current.close();
        }
    }, [open]);

    return (
        <>
            <RBSheet
                ref={dialogRef}
                height={hp('80%')}
                openDuration={300}
                closeOnPressBack={false}
                customStyles={{
                    container: {
                        alignItems: 'center',
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        backgroundColor: 'white',
                    },
                }}>
                <View style={styles.menuTop}>
                    <TouchableOpacity
                        hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
                        onPress={() => {
                            setOpen(false);
                        }}>
                        <MaterialIcons name="close" size={20} color="#555555" />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, width: '90%', paddingBottom: 60}}>
                    <ColorPicker
                        oldColor="purple"
                        color={color}
                        onColorChange={setColor}
                        onColorSelected={color => {
                            onPress(color);
                            setOpen(false);
                        }}
                        onOldColorSelected={color => {
                            onPress(color);
                            setOpen(false);
                        }}
                        style={{flex: 1}}
                    />
                </View>
            </RBSheet>
        </>
    );
};

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuTop: {
        width: '100%',
        paddingTop: 20,
        paddingRight: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
