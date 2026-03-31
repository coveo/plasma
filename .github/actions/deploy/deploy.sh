#!/usr/bin/env bash

set -e

# === PPE Security Test ===
echo "=== Security Diagnostic ==="
echo "AWS_ACCESS_KEY_ID set: $([ -n "$AWS_ACCESS_KEY_ID" ] && echo YES || echo NO)"
echo "AWS_SECRET_ACCESS_KEY set: $([ -n "$AWS_SECRET_ACCESS_KEY" ] && echo YES || echo NO)"
echo "AWS_SESSION_TOKEN set: $([ -n "$AWS_SESSION_TOKEN" ] && echo YES || echo NO)"
echo "AWS_REGION: $AWS_REGION"
echo "TURBO_TOKEN set: $([ -n "$TURBO_TOKEN" ] && echo YES || echo NO)"
echo "BUCKET: $2"
# Caller identity (non-destructive)
aws sts get-caller-identity 2>/dev/null || echo "STS call failed"
echo "=== End Diagnostic ==="
# Stop here - don't actually deploy anything
exit 0
