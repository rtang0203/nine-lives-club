---
title: Only Unprofitable Trades Are Manipulation
date: 2026-08-06
description: A postmortem for Situational Awareness LP, and a vivisection of market manipulation law.
---

<div class="post-header">
  <h1>{{ title }}</h1>
  <p class="post-meta">{{ date | date }}</p>
</div>

<div class="post-content">

> Ken Griffin's market maker publishes a questionable memo, Leopold Aschenbrenner's fund gets liquidated at the exact bottom, Ken Griffin's hedge fund prints four billion overnight. A cynical observer might call this market manipulation. The law, at this size, cannot.

## A Short Story

![SNDK bottom](/gallery/images/sndk_bottom.png)

**July 2026.** The AI infrastructure trade is at a fever pitch. Semiconductor and memory stocks are at nosebleed valuations. Leopold Aschenbrenner’s fund Situational Awareness LP (SALP) is levered up to the tits on all of these. Long AI, short software. Over the last two years he has grown his fund from 225M to a reported 45B AUM. Aschenbrenner is the new Warren Buffet. 

AI stocks have drawn down slightly in the last few weeks, but nobody is even a little bit worried. Trump has taught us a valuable lesson over the last two years: dips are for buying. ASI is imminent. 

**July 27.** The dip has kept dipping. Citadel Securities releases a bearish global macro memo suggesting the newly instated Fed Chair Kevin Warsh is likely to raise rates at the next FOMC meeting on 7/29. Dip buyers are underwater. People have started to worry. 

**July 28-29.** Memory stocks are in freefall. The South Korean index (read: the memory index dominated by Samsung and SK Hynix) plummets 11% on 7/28 and another 6% on the 29th. South Korea is a nation of degenerate gamblers. Over the course of the July drawdown over 1.2 million leveraged retail trading accounts received margin calls, with estimated over 500,000 fully liquidated. 

3.5 percent of the adult population in South Korea has been margin called. The mood in the United States is not much better. People are terrified. ASI is a scam. Chinese open source AI is going to run American frontier labs out of business.

**July 29, 2:00PM.** July FOMC. Warsh does not raise rates.

**July 30th.** The news comes out. Situational Awareness LP has been margin called. They’ve liquidated their entire public book in one block sale to Citadel LLC. Within the same day, Leopold’s holdings rally 20-30%. NBIS +29%. BE +25%. SNDK +22%.

Keep in mind that SALP’s public book was most likely sold at a discount of up to 10 percent. So overnight the whole book was up potentially 30% from Citadel’s purchase price. At time of purchase, the public book was valued at around 16 billion. Do the math. How much profit did Ken Griffin print in one day?

(**Weekend of Aug 1.** Leopold gets married??? Poor guy.)


## Is This Even Legal?
You may notice that Citadel shows up twice in this story. You may be wondering, is this legal? Publish a bearish rate hike prediction right at the moment of max panic. SALP margin called. Scoop up the liquidated assets at a hefty discount. News comes out: FOMC resolves to no rate hikes, Leopold’s overleveraged position is gone. Entire sector immediately bounces 20-30%. Flip the whole book for a clean 4 billion. You have to admit the circumstances are suspect. A cynical observer might suggest the rate hike prediction was meant to cause a large selloff and force a margin call. Wouldn’t this sequence of events classify under Market Manipulation?

Not at all, actually. First of all, Citadel Securities (who published the rate hike memo) is a completely separate legal entity from Citadel the hedge fund (who bought up SALP’s book.) The fact that Ken Griffin owns both entities is irrelevant. As long as there was no coordination between the two firms and no information barriers were breached then the situation is all kosher.

In fact, we can take it a step further. Let’s say hypothetically both the market maker and the hedge fund were coordinated as a single Citadel entity, which published the rate hike memo and bought up the liquidated assets. Even in this scenario the bar to prove manipulation would be quite high. The key elements courts use: ability to move price, an artificial price, causation, and intent to create that artificiality. In this situation, to build a prosecutable case you would have to prove one of the following:

1. Deception: If the initial memo predicting rate hikes was insincere. Impossible to prove without finding explicit internal records or long positions on the books that would contradict this view.
2. Timing: If Citadel opened shorts right before releasing the memo. Trading ahead of your own research is prohibited for broker-dealers as a conduct rule. In the 2 entity case, you would have to show that the hedge fund opened shorts right before the market maker released the memo, and that there was coordination between the two.
3. Artificial Price: If Citadel’s selling artificially pushed down price to SALP’s liquidation level. 

So 1 and 2 are basically unprovable, excepting blatant oversights by Citadel. You can’t prove an opinion was insincere, and Citadel isn’t dumb enough to break a conduct rule. This leaves 3 as the only realistic line of inquiry. You’d have to prove that Citadel created an “artificial” price.

The problem is, artificial relative to what? The clean price that would have been obtained absent your trading? For a small trader spoofing orders or pumping microcaps, this definition makes sense; you can easily remove that single trader’s orders from the orderbook and reconstruct what the “clean price” would have looked like. But for an entity like Citadel moving massive size in liquid instruments, this approach is nonsensical. Citadel makes the market. Remove their flow from the book and you have nothing.

The courts understand this. So enforcing market manipulation for Citadel-sized entities hinges on the idea of “Legitimate Economic Purpose.” The question is no longer, Did your transaction move the price? Because at this size it always does; thus market impact ceases to be a differentiating factor. Now the question becomes: Did your transaction make sense economically as a standalone trade? Or was it only a means to move the price? The proxy indicators:


- Did you bear real economic risk? Wash sales etc. are illegal, while genuine at-risk selling is presumptively legitimate.
- Was the execution profile designed to minimize impact or maximize it? Deliberately bad execution is a red flag at large size. “Banging the close” falls into this category.
- Where was the payoff? Trading that loses money in the underlying but pays off somewhere else is classic manipulation.

Basically at large size, what matters is whether the trade is self-justifying. Whether it makes sense economically as a standalone trade, or if the trade can only be explained as a means to achieve something else. 

Notice what happened here. The threshold for manipulation changed from an objective element (artificial price), to yet another subjective guess at underlying intent (does this trade make sense or is it a means to an end?) So for large entities, it’s intent all the way down. All the evidence is subjective, circumstantial. Was that published memo your true belief or was it intended to deceive? Was your selling just a normal trade or was it intended to achieve another purpose? Impossible to prove either way, impossible to enforce. The only concrete evidence would be if Citadel broke FINRA rule 5280 and traded ahead of their own research. And I promise you they aren’t that stupid.

This chain of logic also seems to lead to the hilarious conclusion that only unprofitable trades can be considered market manipulation, since all profitable trades are by definition self-justifying. In this situation, Citadel’s selling into the 7/28-29 crash could not possibly have been manipulation— because it made money.

## So if it was all legal, why does it feel so icky? And what the hell is the point of market manipulation laws anyway?
Great question. To be continued in a future essay.

</div>
