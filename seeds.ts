import { prisma } from './generated/prisma-client'

async function main() {
  const product3 = await prisma.createProduct({
    name: 'スターダストクルセイダーズ',
    version: 3
  })
  const product4 = await prisma.createProduct({
    name: 'ダイヤモンドは砕けない',
    version: 4
  })

  await prisma.createHero({
    name: '空条承太郎',
    stand: 'スタープラチナ',
    product: {
      connect: {
        id: product3.id
      }
    }
  })
  await prisma.createHero({
    name: 'ジョセフ・ジョースター',
    stand: 'ハーミットパープル',
    product: {
      connect: {
        id: product3.id
      }
    }
  })
  await prisma.createHero({
    name: 'ポルナレフ',
    stand: 'シルバーチャリオッツ',
    product: {
      connect: {
        id: product3.id
      }
    }
  })
  await prisma.createHero({
    name: '東方仗助',
    stand: 'クレイジーダイアモンド',
    product: {
      connect: {
        id: product4.id
      }
    }
  })
  await prisma.createHero({
    name: '虹村億泰',
    stand: 'ザ・ハンド',
    product: {
      connect: {
        id: product4.id
      }
    }
  })
  await prisma.createHero({
    name: '広瀬康一',
    stand: 'エコーズ',
    product: {
      connect: {
        id: product4.id
      }
    }
  })

  await prisma.createEnemy({
    name: 'ディオ・ブランドー',
    stand: 'ザ・ワールド',
    product: {
      connect: {
        id: product3.id
      }
    }
  })
  await prisma.createEnemy({
    name: '吉良吉影',
    stand: 'キラークイーン',
    product: {
      connect: {
        id: product3.id
      }
    }
  })
}

main().catch(e => console.error(e))
