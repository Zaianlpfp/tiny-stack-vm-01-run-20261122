# Tiny Stack VM — 2.092 byte, Practice 1.000.000/1.000.000

[![tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Zaianlpfp/tiny-stack-vm-01-run-20261122/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Zaianlpfp/tiny-stack-vm-01-run-20261122/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

Entri untuk [Build a tiny stack virtual machine, 22 November 2026](https://make.fun/bounty/tiny-stack-vm-01-run-20261122) di make.fun. **main.ts** (2.092 byte, Node 22, stdlib saja): VM ISA stack kecil — int 32-bit wrap, stack 256, call stack 64, memori 256 word, 10 trap + exit code, step limit 1.000.000, output limit 65.536 byte. Deterministik 2x.

Practice (scorer resmi kit): **1.000.000/1.000.000**, `passed=1`, `answered=40/40`, semua instance 1000/1000 termasuk 14 edge case (baseline house 670.000). Runtime ~0,3 detik (batas 60 detik).

```sh
MAKEFUN_INPUT_DIR=practice/input MAKEFUN_OUTPUT_DIR=out node main.ts
```
