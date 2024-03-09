import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame10.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 3:1778 */
export const Frame10: FC<Props> = memo(function Frame10(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame9}>
        <div className={classes.frame1}>
          <div className={classes.sun}>Sun</div>
        </div>
        <div className={classes.frame2}>
          <div className={classes.mon}>Mon</div>
        </div>
        <div className={classes.frame3}>
          <div className={classes.tue}>Tue</div>
        </div>
        <div className={classes.frame4}>
          <div className={classes.wed}>Wed</div>
        </div>
        <div className={classes.frame5}>
          <div className={classes.thu}>Thu</div>
        </div>
        <div className={classes.frame6}>
          <div className={classes.fri}>Fri</div>
        </div>
        <div className={classes.frame7}>
          <div className={classes.sat}>Sat</div>
        </div>
      </div>
      <div className={classes.frame8}>
        <div className={classes.frame72}>
          <div className={classes._26}>26</div>
        </div>
        <div className={classes.frame82}>
          <div className={classes._27}>27</div>
        </div>
        <div className={classes.frame13}>
          <div className={classes._1}>1</div>
        </div>
        <div className={classes.frame73}>
          <div className={classes._2}>2</div>
        </div>
        <div className={classes.frame83}>
          <div className={classes._3}>3</div>
        </div>
        <div className={classes.frame92}>
          <div className={classes._4}>4</div>
        </div>
        <div className={classes.frame10}>
          <div className={classes._5}>5</div>
        </div>
      </div>
      <div className={classes.frame102}>
        <div className={classes.frame11}>
          <div className={classes._6}>6</div>
        </div>
        <div className={classes.frame12}>
          <div className={classes._7}>7</div>
        </div>
        <div className={classes.frame132}>
          <div className={classes._8}>8</div>
        </div>
        <div className={classes.frame74}>
          <div className={classes._9}>9</div>
        </div>
        <div className={classes.frame84}>
          <div className={classes._10}>10</div>
        </div>
        <div className={classes.frame93}>
          <div className={classes._11}>11</div>
        </div>
        <div className={classes.frame103}>
          <div className={classes._12}>12</div>
        </div>
      </div>
      <div className={classes.frame112}>
        <div className={classes.frame113}>
          <div className={classes._13}>13</div>
        </div>
        <div className={classes.frame122}>
          <div className={classes._14}>14</div>
        </div>
        <div className={classes.frame133}>
          <div className={classes._15}>15</div>
        </div>
        <div className={classes.frame75}>
          <div className={classes._16}>16</div>
        </div>
        <div className={classes.frame85}>
          <div className={classes._17}>17</div>
        </div>
        <div className={classes.frame94}>
          <div className={classes._18}>18</div>
        </div>
        <div className={classes.frame104}>
          <div className={classes._19}>19</div>
        </div>
      </div>
      <div className={classes.frame123}>
        <div className={classes.frame114}>
          <div className={classes._20}>20</div>
        </div>
        <div className={classes.frame124}>
          <div className={classes._21}>21</div>
        </div>
        <div className={classes.frame134}>
          <div className={classes._22}>22</div>
        </div>
        <div className={classes.frame76}>
          <div className={classes._23}>23</div>
        </div>
        <div className={classes.frame86}>
          <div className={classes._24}>24</div>
        </div>
        <div className={classes.frame95}>
          <div className={classes._25}>25</div>
        </div>
        <div className={classes.frame105}>
          <div className={classes._262}>26</div>
        </div>
      </div>
      <div className={classes.frame135}>
        <div className={classes.frame115}>
          <div className={classes._272}>27</div>
        </div>
        <div className={classes.frame125}>
          <div className={classes._28}>28</div>
        </div>
        <div className={classes.frame96}>
          <div className={classes._110}>1</div>
        </div>
        <div className={classes.frame106}>
          <div className={classes._29}>2</div>
        </div>
        <div className={classes.frame116}>
          <div className={classes._32}>3</div>
        </div>
        <div className={classes.frame126}>
          <div className={classes._42}>4</div>
        </div>
        <div className={classes.frame136}>
          <div className={classes._52}>5</div>
        </div>
      </div>
    </div>
  );
});
