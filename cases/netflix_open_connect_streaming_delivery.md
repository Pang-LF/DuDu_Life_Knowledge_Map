# Netflix Open Connect Streaming Delivery

- Case ID: `CASE.NETFLIX.OPEN_CONNECT`
- Domain: BUSINESS / Subscription Video and Streaming
- Primary concept: Broadband and Streaming Technology Foundations
- Status: Studied; Teach-back pending

## Puzzle

Why can two households with the same advertised broadband tier experience very different 4K start time, quality, and rebuffering?

## Minimum Unit And Path

One hypothetical four-second encoded segment moves from a bitrate variant through a playlist, CDN or Open Connect Appliance, ISP interconnection and access network, home Wi-Fi or Ethernet, device decoder, and adaptive bitrate player.

## Mechanism

The player consumes buffered seconds while downloading the next segment. A four-second segment averaging 15 Mbps contains about 60 megabits. Stable 30 Mbps delivery takes roughly two seconds and adds buffer; stable 10 Mbps takes roughly six seconds and depletes buffer. Real content uses variable encodes, so this is a mechanism illustration rather than a fixed Netflix segment size.

## Open Connect Architecture

Netflix launched Open Connect in 2011. Its 2021 briefing paper reported more than $1 billion invested in over 14,000 Open Connect Appliances across 142 countries. Qualifying ISPs can receive embedded appliances at no charge while supplying rack space, power, and connectivity. Local delivery reduces repeated long-haul transit without changing the household's broadband tier or combining the Netflix and ISP bills.

## Evidence Boundary

Advertised Mbps measures one access tier, not guaranteed application throughput. CDN placement, interconnection, ISP congestion, home networking, simultaneous usage, packet loss, device decoding, encode availability, and ABR decisions can each affect playback. A single speed test near the router does not localize the constrained link.

## Sources

- https://developer.apple.com/documentation/http-live-streaming
- https://developer.apple.com/library/archive/referencelibrary/GettingStarted/AboutHTTPLiveStreaming/about/about.html
- https://help.netflix.com/en/node/306
- https://openconnect.netflix.com/
- https://openconnect.netflix.com/Open-Connect-Briefing-Paper.pdf
- https://docs.fcc.gov/public/attachments/FCC-22-103A2.pdf
