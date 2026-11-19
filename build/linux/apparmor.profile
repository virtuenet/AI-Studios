abi <abi/4.0>,
include <tunables/global>

profile ai-studios /opt/AI\ Studios/ai-studios flags=(unconfined) {
  userns,
  include if exists <local/ai-studios>
}