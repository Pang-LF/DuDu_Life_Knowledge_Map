# Meta Global Backbone, BGP and DNS Outage, 2021

## Case ID

`CASE.META.GLOBAL_OUTAGE.BGP_DNS.2021`

## Why This Case Matters

The event separates server and data health from service reachability. A backbone control change disconnected data centers, DNS sites withdrew BGP advertisements as designed, operational name servers became unreachable, and the same network and naming dependencies impaired recovery tools.

## Narrative

### Before

Meta's global backbone connected edge facilities and large data centers across tens of thousands of miles of fiber. User requests reached a nearby facility and then traveled across the backbone to data centers. Edge facilities also ran authoritative DNS and advertised their address prefixes to the Internet through BGP.

### Pressure Builds

Routine maintenance required engineers to remove links or routers temporarily for repair, capacity and software work. A command-audit system was intended to stop changes that would remove unsafe amounts of global backbone capacity, but the control operation still had authority over a highly coupled network.

### Turning Point

On October 4, 2021, a routine maintenance command intended to assess global backbone capacity unintentionally removed all backbone connections from operation. Meta reported that a bug in the audit tool prevented it from correctly stopping the command.

### Cascade

Data centers lost communication with one another and the Internet. Edge DNS sites interpreted their inability to reach data centers as unhealthy and withdrew the BGP advertisements for their DNS prefixes. The DNS servers were still operating but were unreachable, so external resolvers could not obtain service addresses. Normal remote access and DNS-dependent internal tools also failed, forcing engineers toward slower physical access.

### Decision

Meta sent engineers onsite to restore the backbone under strict physical and system-security procedures. After connectivity returned, the company brought services back gradually because individual data centers had seen power-demand drops in the tens of megawatts and an abrupt traffic and cache surge could have caused further instability.

### Outcome

Cloudflare externally observed major BGP changes around 15:40 UTC, loss of `facebook.com` DNS availability around 15:50 UTC and restoration around 21:20 UTC, an approximately 5-hour-30-minute observation window. Meta reported that backbone restoration brought services back and that it had no evidence of malicious activity or user-data compromise from the outage.

### Aftermath

Meta said it would strengthen testing, drills and resilience and consider simulations of a complete global-backbone loss, a condition its prior storm exercises had not reproduced. The incident showed that independent recovery must include control commands, routing advertisements, DNS, operational access and safe load restoration, not only spare servers.

## Explained Numbers

- `tens of thousands of miles`: Meta's description of the global fiber backbone, indicating geographical scale rather than route diversity or usable capacity.
- `15:50–21:20 UTC ≈ 5 h 30 min`: Cloudflare's external DNS-availability window, not a universal per-user outage duration or Meta's internal incident clock.
- `tens of megawatts`: Meta's reported range of power-demand dips at individual data centers while services were offline; it is not a total fleet figure or a direct measure of lost traffic.
- `1 Gbit/s × 80 ms = 10 MB`: lesson model for bandwidth-delay product, unrelated to Meta's undisclosed backbone bandwidth.

## Counterfactual

If the command-audit control had prevented global removal, the initiating change would likely have stopped before the cascade. If a genuinely independent operational-access and naming path had remained reachable, diagnosis and recovery could have avoided some physical-access delay. Merely adding more application servers behind the same backbone, BGP and DNS dependency would not have fixed the failure.

## Evidence Boundaries

- Meta's company-authored postmortem supports the public trigger, cascade, recovery obstacles and stated lessons, but is not an independent audit and omits complete topology, guardrails, service impact and financial loss.
- Cloudflare observed external BGP and DNS behavior but could not inspect Meta's internal network or every user's experience.
- The incident does not show that BGP withdrawal or health checks are inherently wrong; the mechanism behaved according to a health dependency whose failure scope became global.
- Public statements found no evidence of malicious activity or data compromise; that is not proof about every possible internal data state beyond the disclosed investigation.

## Sources

- https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/
- https://engineering.fb.com/2021/10/04/networking-traffic/outage/
- https://blog.cloudflare.com/october-2021-facebook-outage/
- https://www.rfc-editor.org/rfc/rfc1034.html
- https://www.rfc-editor.org/rfc/rfc4271.html
