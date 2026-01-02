---
title: Polymarket Calibration Analysis
date: 2025-12-30
description: Are contract prices on Polymarket well calibrated? Does a 60c contract actually win 60% of the time? 
---

<div class="post-header">
  <h1>{{ title }}</h1>
  <p class="post-meta">{{ date | date }}</p>
</div>

<div class="post-content">

> Are contract prices on Polymarket well calibrated? I.e. does a 60c contract actually win 60% of the time? Or are certain prices systematically over/underpriced? I scraped 5 million trades from 20,000 markets to answer this question.

## TLDR
Two independent effects suggest slight edges:
1. **Price range**: Contracts priced 60-90c win slightly more often than implied; contracts priced 5-45c win slightly less often. Edge: buy high-priced contracts, sell low-priced ones.
2. **YES vs NO**: YES contracts are slightly overpriced across all ranges; NO contracts are slightly underpriced. Edge: buy NO contracts, sell YES contracts.

Stacking these effects, the play may be buying NO contracts in the 65-85c range or selling YES contracts in the 15-40c range. Effects appear more pronounced in markets further from resolution (> 1 week).

Overall calibration error is only ~2.5 cents, so markets are reasonably efficient and these edges are modest. This is not financial advice. Do your own research.

## Colab and Github links

<div>
<a href="https://colab.research.google.com/github/rtang0203/polymarket-calibration/blob/main/analysis.ipynb">
      <span class="item-title">Colab link with truncated sample dataset.</span>
</a>
</div>

<div>
<a href="https://github.com/rtang0203/polymarket-calibration">
      <span class="item-title">Github including data collector script. Try running it yourself to collect a larger dataset. </span>
</a>
</div>

## The Dataset

```
Loaded 5,184,990 trades from 19,753 markets

Date range: 2022-12-28 20:12:20+00:00 to 2025-12-30 03:37:11+00:00

Side distribution:
side
BUY     3908381
SELL    1276609
Name: count, dtype: int64

Outcome distribution:
outcome
Down                    1656452
Up                      1646990
No                       632964
Yes                      618229
Over                      36493
                         ...   
Whittier Poets                1
MGN Vikings Esports           1
Tampa Bay Rays                1
Dziuseppe                     1
Florida A&M Rattlers          1
Name: count, Length: 1730, dtype: int64

Overall win rate: 58.31%
Average price: 0.581
```

```
Trades per market:
  Min: 1, Max: 1000, Median: 115
  Markets with <10 trades:  2946
  Markets with <50 trades:  7099
  Markets with <500 trades: 15812
  Markets with <1000 trades: 19731
  Markets with 1000+ trades: 22
```

## Inverse Probability Weighting Adjustment

I tried weighting the trades by market size to prevent high volume markets with thousands of trades from dominating the analysis. 

Trades are weighted by 1 / max(n_trades_in_market, 100) to balance market representation. In effect, markets with 100+ trades contribute equally; smaller markets are downweighted proportionally.

The weighting did not end up having a huge impact on the results. The effects observed are present with or without the weighting adjustment, as you will see below.

## Main Calibration Analysis:

Investigating the main question. Are there any price ranges which are systematically mispriced in general? I.e., are there certain ranges where contracts priced in this range are more/less likely to win than the price implies?

![calibration unweighted](/gallery/images/calibration_unweighted.png)
![calibration weighted](/gallery/images/calibration_weighted.png)
![calibration deviation](/gallery/images/calibration_deviation.png)

```
Mean Absolute Calibration Error:
  Weighted:   2.56 cents
  Unweighted: 2.55 cents
```

A calibration error of ~2.5 cents is fairly small — on average, contract prices are only off by about 2.5 percentage points from their true win rates. This suggests Polymarket is reasonably efficient overall, though small systematic biases exist.

From this data it looks like contracts in the 5c-45c range are slightly overpriced, while contracts in the 60-90c range are slightly underpriced. 

In actionable terms, you may want to consider leaning towards buying contracts priced above 60c and selling contracts currently priced below 40c. 

## YES vs NO Analysis

Investigating whether there is any difference in calibration between YES vs NO contracts. Is one more likely to win than the other on average?

![yes vs no unweighted](/gallery/images/yesNo_unweighted.png)
![yes vs no weighted](/gallery/images/yesNo_weighted.png)

From this dataset it looks like YES contracts are slightly overpriced across all price ranges, while NO contracts are slightly underpriced across all price ranges.

In actionable terms, you may want to consider leaning towards selling YES contracts and buying NO contracts.

## Time to Resolution Analysis

I also ran a cursory analysis on Time to Resolution, investigating whether how far away the market is from resolution affects the calibration of contract pricing. Are markets that are further out from resolution more mispriced than nearer ones?

![ttr 1](/gallery/images/ttr_1.png)
![ttr 1](/gallery/images/ttr_2.png)

From this dataset it looks like the price dislocation observed earlier (>60c underpriced, <40c overpriced) is more pronounced for markets that are further away from resolution (> 1 week).

This makes sense intuitively but the data here was a little sparse for the further time ranges. Would need to gather a larger dataset with more older trades/markets to investigate further.