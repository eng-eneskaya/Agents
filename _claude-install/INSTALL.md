# Kurulum — tek komut

`.claude/` klasörüne uzaktan yazmaya izin verilmiyor (güvenlik kısıtı), bu yüzden 4 dosya geçici olarak buraya bırakıldı. Terminalde repo kökünde şunu çalıştır:

```bash
cd ~/Documents/Agents
mkdir -p .claude/skills .claude/commands
cp -R _claude-install/skills/. .claude/skills/
cp -R _claude-install/commands/. .claude/commands/
rm -rf _claude-install
```

## Ne kuruluyor

| Dosya | Hedef | Ne işe yarar |
|---|---|---|
| `skills/youtube-profession-research/SKILL.md` | `.claude/skills/` | Meslek araştırma skill'i — otomatik tetiklenir |
| `skills/youtube-scriptwriting/SKILL.md` | `.claude/skills/` | Senaryo/caption skill'i |
| `skills/youtube-edit-plan/SKILL.md` | `.claude/skills/` | Edit & motion graphics planlama skill'i |
| `commands/heartbeat.md` | `.claude/commands/` | `/heartbeat youtube` slash komutu |
| `skills/remotion-motion-graphics/SKILL.md` | `.claude/skills/` | Mevcut skill'in **düzeltilmiş** hali — eski `EDIT_MOTION_GRAPHICS.md` yoluna atıf yapıyordu, artık `youtube-edit-plan`'e işaret ediyor |

## Doğrulama

Claude Code'u repo kökünde aç ve şunları çalıştır:

```
/heartbeat youtube
```

Komut görünmüyorsa Claude Code'u yeniden başlat (komutlar açılışta taranır).

Skill'lerin yüklendiğini görmek için:

```
hangi skill'ler yüklü?
```

Listede `youtube-profession-research`, `youtube-scriptwriting`, `youtube-edit-plan` ve mevcut `remotion-motion-graphics` görünmeli.
