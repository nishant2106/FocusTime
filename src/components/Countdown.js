import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({
    minutes = 1,
    isPaused 
}) => {
    
    const interval = React.useRef(null)

    useEffect(() => {
        if(isPaused){ 
            console.log( isPaused )
            return 
        }
        interval.current = setInterval(countdown, 1000)
        return () => clearInterval(interval.current)
    },[isPaused])

    const countdown = () => { 
        setMillis((time) => {
            if(time === 0){
                // do stuff here
                return time;
            }
            const timeLeft = time - 100
            // report the progress
            return timeLeft
        })
    }

    const [millis, setMillis] = useState(minutesToMillis(minutes));

    const minute = Math.floor(millis / 100 / 60) % 60;
    const seconds = Math.floor(millis / 100) % 60;
    return (
        <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: 'rgba(94,132,226,0.3)'
    }
})