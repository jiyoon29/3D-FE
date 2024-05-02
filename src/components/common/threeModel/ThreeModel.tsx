import React from 'react'

import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

interface Props {
  fileUrl: string
}

export default function ThreeModel({ fileUrl }: Props) {
  const fbx = useLoader(FBXLoader, `${process.env.NEXT_PUBLIC_S3_URL}/${fileUrl}`)
  console.log(fbx)
  return <primitive object={fbx} />
}
