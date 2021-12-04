import Intro from './Intro';
import Step1 from './Step1';
import Step2 from './Step2';
import Result from './Result';
import {markRaw} from 'vue';

export default {
    0: markRaw(Intro),
    1: markRaw(Step1),
    2: markRaw(Step2),
    3: markRaw(Result),
};